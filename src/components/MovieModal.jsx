import React, { useEffect } from 'react'

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null

  // Close on Escape or Overlay click
  const handleOverlayClick = (e) => e.target === e.currentTarget && onClose()

  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const initial = movie.name.charAt(0).toUpperCase()

  return (
    <div className="modal-overlay-minimal" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="movie-title">
      <div className="modal-content-minimal">
        <button className="modal-close-minimal" onClick={onClose} aria-label="Close modal">ESC [X]</button>
        
        <div className="modal-inner-minimal">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <span className="genre-badge-mini" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
              {movie.category.toUpperCase()}
            </span>
            <span className="stamp-overlay" style={{ fontSize: '2rem' }}>{initial}</span>
          </div>

          <h2 id="movie-title" className="modal-title-minimal">{movie.name.toUpperCase()}</h2>
          <p className="card-desc-minimal" style={{ fontSize: '1.1rem', marginBottom: '3rem', WebkitLineClamp: 'none', lineClamp: 'none' }}>
            {movie.description}
          </p>
          
          <div className="data-table-minimal">
            <span className="data-label">GENRE</span>
            <span className="data-value">{movie.category}</span>
            
            <span className="data-label">RELEASE</span>
            <span className="data-value">{movie.year}</span>
            
            <span className="data-label">RUNTIME</span>
            <span className="data-value">{movie.duration}</span>
            
            <span className="data-label">RATING</span>
            <span className="data-value">{movie.rating} / 10.0</span>
            
            <span className="data-label">LANG</span>
            <span className="data-value">{movie.language}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
