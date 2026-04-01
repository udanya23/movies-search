import React from 'react'

// Helper for genre colors
const getGenreColor = (category) => {
  const colors = {
    Action: 'var(--c-action)',
    Romance: 'var(--c-romance)',
    Horror: 'var(--c-horror)',
    RomCom: 'var(--c-romcom)',
    Drama: 'var(--c-drama)',
  }
  return colors[category] || 'var(--c-default)'
}

// Helper for rating bar colors
const getRatingColor = (rating) => {
  if (rating >= 8) return 'var(--c-rating-good)'
  if (rating >= 7) return 'var(--c-rating-average)'
  return 'var(--c-rating-low)'
}

export default function MovieCard({ movie, onClick }) {
  const initial = movie.name.charAt(0).toUpperCase()
  const genreColor = getGenreColor(movie.category)
  const ratingColor = getRatingColor(movie.rating)
  
  // Convert 10-scale rating to percentage
  const ratingPercent = (movie.rating / 10) * 100

  return (
    <div 
      className="movie-card-minimal" 
      onClick={() => onClick(movie)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(movie)}
    >
      {/* Header with Genre and Initial Stamp */}
      <div className="card-header-minimal">
        <span 
          className="genre-badge-mini" 
          style={{ 
            color: genreColor,
            borderColor: `${genreColor}33`, // 20% opacity
            background: `${genreColor}11`  // 7% opacity
          }}
        >
          {movie.category.toUpperCase()}
        </span>
        <span className="stamp-overlay">/ {initial}</span>
      </div>

      {/* Main Info */}
      <div className="card-body-minimal">
        <h3 className="card-title-minimal">{movie.name}</h3>
        <p className="card-desc-minimal">{movie.description}</p>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
        </div>
      </div>

      {/* Rating Meter */}
      <div className="rating-container-minimal">
        <div className="rating-label-row">
          <span style={{ color: 'var(--text-secondary)' }}>CRITIC_SCORE</span>
          <span style={{ color: ratingColor }}>{movie.rating} / 10</span>
        </div>
        <div className="rating-bar-base">
          <div 
            className="rating-bar-fill"
            style={{ 
              width: `${ratingPercent}%`,
              background: ratingColor,
              boxShadow: `0 0 10px ${ratingColor}44`
            }}
          />
        </div>
      </div>
    </div>
  )
}
