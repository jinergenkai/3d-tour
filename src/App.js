import React from 'react';
import './App.css';
import PhotoSphereViewer from './viewer';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

function App() {
  return (
    <div className="App">
      <h1>View trọ tôi</h1>
      <PhotoSphereViewer imageUrl={baseUrl + 'sphere.jpg'} />
    </div>
  );
}

export default App;
