import React from 'react'

export default function SearchBar({searchTerm,setSearchTerm}) {
  return (
    <>
      <input type="text"
      placeholder='Enter movie name'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      style={{
        padding:"10px",
        borderRadius:"10px",
        width:"25%",
        fontSize:"1.2rem"
      }}
      />
    </>
  )
}
