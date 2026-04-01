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

  return (
    <div className="modal-overlay-minimal" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="movie-title">
      <div className="modal-content-minimal">
        <button className="modal-close-minimal" onClick={onClose} aria-label="Close modal">CLOSE [X]</button>
        
        <div className="modal-inner-minimal">
          <h2 id="movie-title" className="modal-title-minimal">{movie.name.toUpperCase()}</h2>
          <p className="modal-desc-minimal">{movie.description}</p>
          
          <div className="modal-meta-grid">
            <div className="data-row">
              <span className="data-label">GENRE</span>
              <span className="data-value">{movie.category}</span>
            </div>
            <div className="data-row">
              <span className="data-label">RELEASE</span>
              <span className="data-value">{movie.year}</span>
            </div>
            <div className="data-row">
              <span className="data-label">RUNTIME</span>
              <span className="data-value">{movie.duration}</span>
            </div>
            <div className="data-row">
              <span className="data-label">LANG</span>
              <span className="data-value">{movie.language}</span>
            </div>
            <div className="data-row">
              <span className="data-label">RATING</span>
              <span className="data-value">{movie.rating} / 10.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
