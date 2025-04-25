// src/components/KedarnathViewer.jsx
import React from 'react';

const KedarnathViewer = () => {
  return (
    <iframe
      title="Kedarnath Mandir"
      frameBorder="0"
      allowFullScreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking="true"
      execution-while-out-of-viewport="true"
      execution-while-not-rendered="true"
      web-share="true"
      className="w-screen h-screen"
      src="https://sketchfab.com/models/898b63804d924b6ea89385336f2f8171/embed"
    ></iframe>
  );
};

export default KedarnathViewer;
