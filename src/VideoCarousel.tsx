import React, { useState } from 'react';
import './VideoCarousel.css';

const VideoCarousel: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoIds: string[] = ['m3Mm07NUUp0', 'R9DU4qj47DYg', 'FORyfkSUa4g']; // Substitua pelos IDs reais

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoIds.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoIds.length) % videoIds.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prevVideo}>
        ←
      </button>
      <div className="carousel-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoIds[currentVideo]}?rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Prova social"
        ></iframe>
      </div>
      <button className="carousel-arrow right" onClick={nextVideo}>
        →
      </button>
    </div>
  );
};

export default VideoCarousel;