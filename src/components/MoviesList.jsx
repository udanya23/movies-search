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
        <a href="/" className="brand">CINE_DATABASE v1.0</a>
        <div className="card-meta-minimal" style={{ fontSize: '0.7rem' }}>
          LOCAL_STORAGE: {movies.length} RECORDS
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
          <div style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.5, fontFamily: 'var(--font-mono)' }}>
            [ ERROR ] NO_MOVIES_FOUND_MATCHING_YOUR_QUERY
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

      <footer style={{ marginTop: '5rem', padding: '2rem 0', borderTop: '1px solid var(--border)', opacity: 0.3, fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>
        DESIGNED_BY_DEV // NO_IMAGES_REQUIRED_BY_DESIGN
      </footer>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  )
}
