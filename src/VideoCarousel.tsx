import React, { useState } from 'react';
import './VideoCarousel.css';

const VideoCarousel: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoIds: string[] = [
    'R9DU4qj47DY', // Substitua por seu primeiro ID de vídeo
    'm3Mm07NUUp0', // Substitua por seu segundo ID de vídeo
    'FORyfkSUa4g', // Substitua por seu terceiro ID de vídeo
    // Adicione mais IDs aqui se tiver mais vídeos
  ];

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
        <div className="video-overlay">
          <iframe
            src={`https://www.youtube.com/embed/${videoIds[currentVideo]}?rel=0&modestbranding=1&iv_load_policy=3&controls=0&fs=0&autohide=1&autoplay=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Prova social"
          ></iframe>
        </div>
      </div>
      <button className="carousel-arrow right" onClick={nextVideo}>
        →
      </button>
    </div>
  );
};

export default VideoCarousel;