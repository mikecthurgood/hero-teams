import React, { useState } from 'react'

const SearchForm = ({ searchHeroes }) => {

    const [hero, setHero] = useState("")

    const handleChange = e => {
        setHero(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        searchHeroes(hero)
        e.target.hero.value = ""
    }

    return (
        <>
            <form className="hero-search-form" autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" name="hero" value={hero} onChange={handleChange} placeholder="Search Heroes" />
            </form>
        </>
    )
}

export default SearchForm