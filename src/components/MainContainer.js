import React, { useState } from 'react'
import SearchForm from './SearchForm'
import HeroesList from './HeroesList'
import './MainContainer.scss'
const MainContainer = ({ heroes, myTeam, recruitHero, searched, searchHeroes }) => {

    const [searchFilter, setSearchFilter] = useState('')
    const [letterFilter, setLetterFilter] = useState('A')
    const filteredHeroes = letterFilter ? heroes.filter(hero => hero.name.charAt(0).toLowerCase() === letterFilter.toLowerCase()) : heroes;
    const searchedHeroes = searchFilter ? filteredHeroes.filter(hero => hero.name.toLowerCase().includes(searchFilter.toLowerCase())) : filteredHeroes
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const handleClick = (letter) => {
        setLetterFilter(letter)
        setSearchFilter('')
    }

    return (
        <>
            <div className="header">
                <h1>Search Heroes</h1>
                <h3>
                    {alphabet.split('').map(letter => (
                        <>
                            <span className={`alphabet-filter ${letterFilter.toLowerCase() === letter.toLowerCase() ? 'active' : ''}`} key={letter} onClick={() => handleClick(letter)}>
                                {`${letter}`}
                            </span> 
                            {letter !== 'Z' ? <span> | </span> : ''}
                        </>))}
                        <br />
                        <span className={`alphabet-filter ${!letterFilter ? 'active' : ''}`} onClick={() => setLetterFilter('')}  >
                            SHOW ALL <br />
                        </span>
                </h3>
                <SearchForm searchHeroes={searchHeroes} setSearchFilter={setSearchFilter} searchFilter={searchFilter} />
            </div>

            <HeroesList
                heroes={searchedHeroes}
                searched={searched}
                recruitHero={recruitHero}
                myTeam={myTeam}
                letterFilter={letterFilter}
                searchFilter={searchFilter}
            />
        </>
    )
}


export default MainContainer