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

    const circle1 = new fabric.Circle({
      top: 20,
      left: 50,
      radius: 45,
      fill: "#33CD32",
    });

    const circle2 = new fabric.Circle({
      top: 20,
      left: 190,
      radius: 45,
      fill: "#33CD32",
      stroke: "black",
      strokeWidth: 1,
    });

    const rect1 = new fabric.Rect({
      top: 100,
      left: 100,
      width: 125,
      height: 80,
      fill: "#FF5655",
      stroke: "#FF5655",
      strokeWidth: 1,
    });

    const rect2 = new fabric.Rect({
      top: 100,
      left: 250,
      width: 125,
      height: 80,
      fill: "#FF5655",
      stroke: "black",
      strokeWidth: 1,
    });

    const tri1 = new fabric.Triangle({
      top: 140,
      left: 190,
      width: 100,
      height: 110,
      fill: "#5555FF",
      stroke: "#5555FF",
      strokeWidth: 1,
    });

    const tri2 = new fabric.Triangle({
      top: 140,
      left: 330,
      width: 100,
      height: 110,
      fill: "#5555FF",
      stroke: "black",
      strokeWidth: 1,
    });

    const catSvgUrl =
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/P_cat.svg";

    fabric.loadSVGFromURL(catSvgUrl, (objects, options) => {
      let obj = fabric.util.groupSVGElements(objects, options);
      obj.set({
        top: 50,
        left: 600,
        angle: -10,
        scaleX: 0.6,
        scaleY: 0.6,
      });
      fabricCanvas.add(obj).renderAll();
    });

    fabricCanvas.add(circle1, circle2, rect1, rect2, tri1, tri2);
    fabricCanvas.bringToFront(circle1);
    fabricCanvas.bringToFront(circle2);
    fabricCanvas.sendToBack(tri1);
    fabricCanvas.sendToBack(tri2);
    fabricCanvas.renderAll();
  }, []);

  return (
    <div style={{ border: "2px solid gray" }}>
      <canvas ref={fabricCanvasRef}></canvas>
    </div>
  );
};

export default Home;
