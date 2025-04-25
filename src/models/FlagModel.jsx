import React, { useEffect, useRef, useState } from "react";

export default function FlagModel() {
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
      src="/https://sketchfab.com/models/898b63804d924b6ea89385336f2f8171/embed"
      alt="3D Headphones"
      auto-rotate
      camera-controls
      onClick={() => setClicked(false)} // Enable zoom on click
      style={{
        width: "100%",
        height: "1200px",
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