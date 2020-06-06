import React from 'react'

const Search = ({ query, handleQuery }) => {

    return (
        <form id="search-container">
            <h1>Country Search</h1>
            <input type="text" id="search-box" placeholder="Search for country..." value={query} onChange={handleQuery} />
        </form>
    )
}

export default Search

