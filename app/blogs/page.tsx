import { gql } from "graphql-request";
import { datoClient } from "../config/datoCMS";

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

interface BlogsProps {
  
}
 
export default async function Blogs(props:BlogsProps) {
  const blogs = [];
  const data = (await datoClient.request(QUERY));
  console.log(data);
  return ( <div>
    <h2 className="text-lg text-center md:text-xl text-white_blue">Projects</h2>
          <div className="pt-2">
            {blogs?.length && (
              <div className="pt-2 md:pt-8">
                <h3 className="text-3xl font-semibold text-center md:text-5xl">Main Projects</h3>
                <div className="[&>*:nth-child(odd)]:md:flex-row-reverse">
                  {/* {blogs.map((project, index) => (
                    // <MainProject project={project} key={index} />
                  ))} */}
                </div>
              </div>
            )}
          </div>
    </div>
          );
}