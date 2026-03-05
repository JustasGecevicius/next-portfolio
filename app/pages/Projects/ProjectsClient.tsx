"use client";
import MainProject from "@/app/components/MainProject";
import SmallProject from "@/app/components/SmallProject";
import { useInView } from "react-intersection-observer";

export function ProjectsClient({ mainProjects, smallProjects }: any) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "50px",
  });

  const { ref: smallProjectInViewRef, inView: smallProjectInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className="flex flex-col p-4 overflow-x-hidden grow min-h-screen md:p-10"
      id="projects"
    >
      {inView ? (
        <>
          <h2 className="text-lg text-center md:text-xl text-white_blue">Projects</h2>
          <div className="pt-2">
            {mainProjects?.length && (
              <div className="pt-2 md:pt-8">
                <h3 className="text-3xl font-semibold text-center md:text-5xl">Main Projects</h3>
                <div className="[&>*:nth-child(odd)]:md:flex-row-reverse">
                  {mainProjects.map((project, index) => (
                    <MainProject project={project} key={index} />
                  ))}
                </div>
              </div>
            )}
            {smallProjects?.length && (
              <div className="pt-4" ref={smallProjectInViewRef}>
                <h3 className="text-3xl font-semibold text-center md:pt-10 md:text-5xl">
                  Humble beginnings
                </h3>
                <div className="flex flex-row flex-wrap justify-center gap-3 pt-2 md:pt-10 md:gap-6">
                  {smallProjects.map((project, index) => (
                    <SmallProject project={project} key={index} inView={smallProjectInView} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
