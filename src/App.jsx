import { useEffect } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import MeetupTimelineSection from "./components/MeetupTimelineSection";
import PrepTasksSection from "./components/PrepTasksSection";
import ProjectShowcaseSection from "./components/ProjectShowcaseSection";
import {
  heroStats,
  meetupRecaps,
  prepTasks,
  projectAssignments,
} from "./data/homePageContent";

function scrollToHashTarget() {
  const hash = window.location.hash.slice(1);

  if (!hash) {
    return;
  }

  const target = document.getElementById(decodeURIComponent(hash));

  if (!target) {
    return;
  }

  target.scrollIntoView({ block: "start" });
}

function App() {
  useEffect(() => {
    const scrollAfterRender = () => {
      window.requestAnimationFrame(() => {
        scrollToHashTarget();
      });
    };

    scrollAfterRender();
    window.addEventListener("hashchange", scrollAfterRender);

    return () => {
      window.removeEventListener("hashchange", scrollAfterRender);
    };
  }, []);

  return (
    <main className="page-shell">
      <HeroSection stats={heroStats} />
      <MeetupTimelineSection meetups={meetupRecaps} />
      <PrepTasksSection tasks={prepTasks} />
      <ProjectShowcaseSection assignments={projectAssignments} />
    </main>
  );
}

export default App;
