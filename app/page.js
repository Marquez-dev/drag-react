"use client";

import Draggable from "react-draggable";
import { useState, useCallback } from "react";
export default function Home() {
  // Define state variables using useState
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [controlledPosition, setControlledPosition] = useState({
    x: -400,
    y: 200,
  });

  // Event handler for when drag starts
  const onStart = useCallback(() => {
    setActiveDrags((prevActiveDrags) => {
      console.log("prevActiveDrags", prevActiveDrags);
      return prevActiveDrags + 1;
    });
  }, []);

  // Event handler for when drag stops
  const onStop = useCallback(() => {
    setActiveDrags((prevActiveDrags) => {
      console.log("prevActiveDrags", prevActiveDrags);
      return prevActiveDrags - 1;
    });
  }, []);

  // Define dragHandlers object
  const dragHandlers = { onStart, onStop };
  return (
    <>
      <div className="border-2 bg-gray-500 ">
        <div
          className="bg-red-400"
          style={{ height: "500px", width: "500px", padding: "0px" }}
        >
          <Draggable
            bounds="parent"
            onStop={(e, ui) => {
              console.log("ui", ui);
              setDeltaPosition({
                x: ui.x,
                y: ui.y,
              });
              // console.log("e", e);
            }}
          >
            <div className="box">
              I can only be moved within my offsetParent.
              <br />
              <br />
              Both parent padding and child margin work properly.
            </div>
          </Draggable>
        </div>
      </div>
      <button
        className="bg-blue-500 p-2 rounded-lg"
        onClick={() => console.log("deltaPosition", deltaPosition)}
      >
        Click me
      </button>
    </>
  );
}
