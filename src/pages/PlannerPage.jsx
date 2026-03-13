import TopBar from "../layout/TopBar";
import LeftSidebar from "../layout/LeftSidebar";
import RightSidebar from "../layout/RightSidebar";

export default function PlannerPage() {
  return (
    <div className="appShell">
      <TopBar />

      <div className="mainLayout">
        <LeftSidebar />

        <main className="canvasArea">
          <h1>SSO Stable Builder</h1>
          <p>Planner canvas will go here.</p>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}