import { MainProjectType } from "./MainProject";
import ProjectCard from "./ProjectCard";

export default function SmallProject({ project, inView }: MainProjectType) {
  return (
    <ProjectCard
      title={project?.name}
      images={project?.mainImage ? [project.mainImage.url] : undefined}
      text={project?.description}
      inView={inView}
    />
  );
}
