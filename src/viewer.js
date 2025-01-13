import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

const PhotoSphereViewer = ({ imageUrl }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer({
      container: viewerRef.current,
      panorama: imageUrl,
    });

    return () => {
      viewer.destroy();
    };
  }, [imageUrl]);

  return (
    <div
      ref={viewerRef}
      style={{ width: '100%', height: '80vh' }}
    ></div>
  );
};

export default PhotoSphereViewer;
