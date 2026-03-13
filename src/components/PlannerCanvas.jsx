import { Stage, Layer, Rect } from "react-konva";

// planner canvas
export default function PlannerCanvas() {
  return (
    <Stage width={800} height={600}>
      <Layer>
        {/* test stable block */}
        <Rect
          x={100}
          y={100}
          width={120}
          height={60}
          fill="#888"
          draggable
        />
      </Layer>
    </Stage>
  );
}