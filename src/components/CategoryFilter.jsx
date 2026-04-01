import React from 'react'

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const allCategories = ['ALL', ...categories]

  return (
    <div className="filter-row" role="group" aria-label="Genre selection">
      {allCategories.map((cat) => {
        const value = cat === 'ALL' ? '' : cat
        const isActive = selectedCategory === value
        
        return (
          <button
            key={cat}
            className={`filter-btn ${isActive ? 'active' : ''}`}
            onClick={() => setSelectedCategory(value)}
            aria-pressed={isActive}
          >
            {cat.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
