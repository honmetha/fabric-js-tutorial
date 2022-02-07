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

    const text1 = new fabric.Text("Fabric", {
      top: 340,
      left: 100,
      angle: -4,
      fill: "#FE0908",
      fontSize: 30,
      strokeWidth: 1,
      fontFamily: "sans-serif",
    });

    const text2 = new fabric.Text("has", {
      top: 300,
      left: 200,
      fontSize: 80,
      fontWeight: 800,
      fill: "#EEEEEE",
      stroke: "red",
      strokeWidth: 2,
      fontFamily: "sans-serif",
    });

    const text3 = new fabric.Text("multiline text", {
      top: 400,
      left: 100,
      angle: -4,
      fontSize: 35,
      fontWeight: 600,
      fill: "#008001",
      textBackgroundColor: "#EEFFEE",
      fontFamily: "sans-serif",
    });

    const text4 = new fabric.Text("with extensive \ndecoration support", {
      top: 450,
      left: 100,
      angle: -4,
      lineHeight: 1,
      fontSize: 30,
      underline: true,
      textAlign: "center",
      fill: "#0000FF",
      fontFamily: "sans-serif",
    });

    const text5 = new fabric.Text("and \neven \nalignment", {
      top: 520,
      left: 160,
      fontSize: 30,
      angle: 4,
      fill: "#808080",
      textAlign: "right",
      lineHeight: 1,
      fontStyle: "italic",
      fontFamily: "sans-serif",
    });

    fabricCanvas.add(
      circle1,
      circle2,
      rect1,
      rect2,
      tri1,
      tri2,
      text1,
      text2,
      text3,
      text4,
      text5
    );
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
