import React from 'react';
import './TrendingToday.css'; // Import your CSS file

const TrendingToday = ({ trendingPhotosData }) => {
  return (
    <div className="trending-container">
      <h2 className='tt'>Trending Today</h2>
      <div className="photo-container">
        {trendingPhotosData.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.imageUrl} alt={photo.title} />
            <div className="photo-details">
              <span className="calendar-logo">📅</span>
              <span className="date">{photo.date}</span>
              <h3 className="photo-title">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingToday;

