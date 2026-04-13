import { gql } from "graphql-request";
import { datoClient } from "../config/datoCMS";
import BlogCard from "./components/BlogCard";

const QUERY = gql`
  {
    allBlogs {
      content {
        blocks
        inlineBlocks
        links
        value
      }
      coverimage {
        url
      }
      excerpt
      id
      publisheddate
      slug
      title
      author
    }
  }
`;

interface BlogsProps {}

export default async function Blogs(props: BlogsProps) {
  const data = await datoClient.request(QUERY);
  const allBlogs = data.allBlogs;
  return (
    <div className="w-screen flex items-center flex-col">
      <h2 className="text-lg text-center md:text-xl text-white_blue">Blogs</h2>
      <div className="p-2 max-w-3xl flex items-center flex-col">
        {allBlogs?.length && (
          <div className="pt-2 md:pt-8">
            <div className="[&>*:nth-child(odd)]:md:flex-row-reverse">
              {allBlogs.map((blog) => (
                <BlogCard blog={blog} key={blog?.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
