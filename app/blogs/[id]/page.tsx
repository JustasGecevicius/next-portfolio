import { gql } from "graphql-request";
import { StructuredText } from "react-datocms/structured-text";
import Image from "next/image";
import { datoClient } from "../../config/datoCMS";

const QUERY = gql`
  query BlogPost($id: ItemId!) {
    blog(filter: { id: { eq: $id } }) {
      title
      excerpt
      author
      publisheddate
      coverimage {
        url
        alt
        width
        height
      }
      content {
        value
      }
    }
  }
`;

export default async function BlogPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await datoClient.request(QUERY, {
    id: params.id,
  });

  const post = data.blog;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Meta */}
      <div className="text-gray-500 mb-6">
        <span>By {post.author}</span> •{" "}
        <span>{new Date(post.publisheddate).toDateString()}</span>
      </div>

      {/* Cover Image */}
      {post.coverimage && (
        <Image
          src={post.coverimage.url}
          alt={post.coverimage.alt || post.title}
          width={post.coverimage.width}
          height={post.coverimage.height}
          className="rounded-lg mb-6"
        />
      )}

      {/* Excerpt */}
      <p className="text-lg text-gray-700 mb-8">{post.excerpt}</p>

      {/* Content (Structured Text) */}
      <div className="prose">
        <StructuredText data={post.content} />
      </div>
    </article>
  );
}