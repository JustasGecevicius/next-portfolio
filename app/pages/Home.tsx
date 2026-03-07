import { Suspense } from "react";
import { ClipLoader } from "react-spinners";
import { MemoizedFloatyBoys } from "../components/FloatyBoys/FloatyBoys";
import HomeWindow from "./HomeWindow";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects/Projects";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen grow">
          <ClipLoader color="#00aeff" />
        </div>
      }
    >
      <div className="relative flex flex-col w-screen grow">
        <HomeWindow />
        <About />
        <TechStack />
        <Projects />
        <MemoizedFloatyBoys />
      </div>
    </Suspense>
  );
}
