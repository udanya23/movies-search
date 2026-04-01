import React from 'react'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-minimal">
      <input
        type="text"
        className="search-input-minimal"
        placeholder="Search database by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />
    </div>
  )
}
