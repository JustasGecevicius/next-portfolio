import { gql } from "graphql-request";
import { datoClient } from "../../config/datoCMS";
import { ProjectsClient } from "./ProjectsClient";

const QUERY = gql`
  {
    allProjects {
      id
      name
      description
      technologies
      visitLink
      githubLink
      isMain
      mainImage {
        url
      }
    }
  }
`;

export default async function Projects() {
  const data = await datoClient.request(QUERY);

  const { mainProjects, smallProjects } = data.allProjects.reduce(
    (acc, project) => {
      if (project.isMain) {
        acc.mainProjects.push(project);
      } else {
        acc.smallProjects.push(project);
      }
      return acc;
    },
    { mainProjects: [], smallProjects: [] },
  );

  return <ProjectsClient mainProjects={mainProjects} smallProjects={smallProjects} />;
}
