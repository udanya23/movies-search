import React from 'react'

export default function MovieCard({ movie, onClick }) {
  const initial = movie.name.charAt(0).toUpperCase()
  
  return (
    <div 
      className="movie-card-minimal" 
      onClick={() => onClick(movie)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(movie)}
    >
      {/* Typography Placeholder instead of image */}
      <div className="typo-poster">
        <span className="poster-letter">{initial}</span>
        <span className="poster-year">{movie.year}</span>
      </div>

      <div className="card-content-minimal">
        <span className="card-category-tag">{movie.category}</span>
        <h3 className="card-title-minimal">{movie.name}</h3>
        <div className="card-meta-minimal">
          <span>{movie.duration}</span>
          <span style={{ margin: '0 0.5rem', opacity: 0.3 }}>|</span>
          <span>{movie.rating} / 10</span>
        </div>
      </div>
    </div>
  )
}
