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

export type AllProjectsResponse = {
  allProjects: {
    id: string;
    name: string;
    description: string;
    technologies: string;
    visitLink: string;
    githubLink: string;
    isMain: boolean;
    mainImage: {
      url: string;
    };
  }[];
};

export default async function Projects() {
  const data = (await datoClient.request(QUERY)) as AllProjectsResponse;

  const { mainProjects, smallProjects } = data.allProjects.reduce(
    (acc, project) => {
      if (project.isMain) {
        acc.mainProjects.push(project);
      } else {
        acc.smallProjects.push(project);
      }
      return acc;
    },
    {
      mainProjects: [] as AllProjectsResponse["allProjects"],
      smallProjects: [] as AllProjectsResponse["allProjects"],
    },
  );

  return <ProjectsClient mainProjects={mainProjects} smallProjects={smallProjects} />;
}
