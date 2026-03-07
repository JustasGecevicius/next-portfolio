import { MainProjectType } from "./MainProject";
import ProjectCard from "./ProjectCard";

export default function SmallProject({ project, inView }: MainProjectType) {
  return (
    <ProjectCard
      title={project?.name}
      images={project?.mainImage ? [project.mainImage.url] : []}
      text={project?.description}
      technologies={project?.technologies}
      visitLink={project?.visitLink}
      githubLink={project?.githubLink}
      inView={inView}
    />
  );
}
