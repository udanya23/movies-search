import React, { useState, useEffect } from 'react'
import moviesData from '../data.json'
import SearchBar from './SearchBar.jsx'
import CategoryFilter from './CategoryFilter.jsx'
import MovieCard from './MovieCard.jsx'
import MovieModal from './MovieModal.jsx'

export default function MoviesList() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    setMovies(moviesData)
    setFilteredMovies(moviesData)
  }, [])

  useEffect(() => {
    const newFiltered = movies.filter((movie) => {
      const matchName = movie.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchCategory = selectedCategory ? movie.category === selectedCategory : true
      return matchName && matchCategory
    })
    setFilteredMovies(newFiltered)
  }, [searchTerm, selectedCategory, movies])

  const categories = [...new Set(movies.map((m) => m.category))]

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedMovie ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedMovie])

  return (
    <div className="container-custom">
      <header className="header-simple">
        <a href="/" className="brand">CINE_DASHBOARD <span style={{ opacity: 0.3, fontWeight: 400 }}>v1.1</span></a>
        <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
          <div>DATABASE_CONNECTED</div>
          <div style={{ color: 'var(--accent)' }}>RECORDS: {movies.length}</div>
        </div>
      </header>

      <main>
        <section className="controls-section">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>

        {filteredMovies.length === 0 ? (
          <div style={{ padding: '8rem 0', textAlign: 'center', opacity: 0.3, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            [ ERROR ] NO_RECORDS_MATCH_THE_CURRENT_FILTER
          </div>
        ) : (
          <div className="movie-grid-minimal" role="list">
            {filteredMovies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onClick={setSelectedMovie} 
              />
            ))}
          </div>
        )}
      </main>

      <footer style={{ marginTop: '10rem', padding: '3rem 0', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.25, fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>
        <div>CINE_DASHBOARD // DATA_EXPLORER</div>
        <div style={{ letterSpacing: '2px' }}>DESIGN_SYSTEM_ALPHA</div>
      </footer>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  )
}
