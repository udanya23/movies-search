import React from 'react'

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <>
      <select
        style={{
          padding: "10px",
          borderRadius: "10px",
          width: "25%",
          fontSize: "1.2rem"
        }}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All categories</option>
        {
          categories.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))
        }
      </select>
    </>
  )
}
