import React, { useEffect, useRef, useState } from "react";

export default function GodModel() {
  const modelRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [scale, setScale] = useState(1); // initial size

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  // Scroll zoom effect
  useEffect(() => {
    const handleScroll = (e) => {
      if (!clicked) return;

      const delta = e.deltaY > 0 ? -0.1 : 0.1; // scroll up/down
      setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 3)); // limit scale
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [clicked]);

  return (
    <model-viewer
      ref={modelRef}
      src="glb/ganpati_2024.glb"
      alt="3D Headphones"
      auto-rotate
      camera-controls
      onClick={() => setClicked(false)} // Enable zoom on click
      style={{
        width: "100%",
        height: "500px",
        // backgroundColor: "#000",
        display: "block",
        margin: "20px auto",
        transform: `scale(${scale})`,
        transition: "transform 0.2s ease-out",
        cursor: clicked ? "zoom-in" : "pointer",
      }}
    />
  );
}