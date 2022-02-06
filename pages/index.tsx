import * as React from "react";
import type { NextPage } from "next";
import { fabric } from "fabric";

const Home: NextPage = () => {
  const fabricCanvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const fabricCanvas = new fabric.Canvas(fabricCanvasRef.current, {
      enableRetinaScaling: false,
      renderOnAddRemove: false,
    });

    fabricCanvas.setDimensions({
      width: window.innerWidth,
      height: window.innerHeight * 0.75,
    });

    const rect = new fabric.Rect({
      width: 50,
      height: 50,
    });

    fabricCanvas.add(rect);
    fabricCanvas.renderAll();
  }, []);

  return (
    <div style={{ border: "2px solid gray" }}>
      <canvas ref={fabricCanvasRef}></canvas>
    </div>
  );
};

export default Home;
