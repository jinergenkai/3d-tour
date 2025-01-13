import React from 'react';
import room from './images/room.jpg';
import './App.css';
import PhotoSphereViewer from './viewer';

const baseUrl = '/';

function App() {
  return (
    <div className="App">
      <h1>View trọ tôi</h1>
      <PhotoSphereViewer imageUrl={room} />
      {/* <img src={room} alt="room" /> */}

    </div>
  );
}

export default App;
