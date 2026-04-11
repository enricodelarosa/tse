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

function App() {
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
