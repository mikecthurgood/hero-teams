import React, { useState } from 'react'

const SearchForm = ({ searchHeroes, setSearchFilter, searchFilter }) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = e => {
        setSearchFilter(e.target.value)
    }

    return (
        <>
            <form className="hero-search-form" autoComplete="off" >
                <input type="text" name="hero" value={searchFilter} onChange={handleChange} placeholder="Search Heroes" />
            </form>
        </>
    )
}

export default SearchForm