import PlannerCanvas from "../components/PlannerCanvas";
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
                    <PlannerCanvas />
                </main>

                <RightSidebar />
            </div>
        </div>
    );
}