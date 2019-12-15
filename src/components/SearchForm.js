import React, { useState } from 'react'

const SearchForm = ({ searchHeroes }) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        searchHeroes(searchTerm)
        e.target.hero.value = ""
    }

    return (
        <>
            <form className="hero-search-form" autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" name="hero" value={searchTerm} onChange={handleChange} placeholder="Search Heroes" />
            </form>
        </>
    )
}

export default SearchForm