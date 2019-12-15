import React from 'react'
import SearchForm from './SearchForm'
import HeroesList from './HeroesList'

const MainContainer = ({ searchHeroes, heroes, searched, recruitHero, myTeam }) => (
    <div className="main">
        <div className="header">
            <h1>Search Heroes</h1>
            <SearchForm searchHeroes={searchHeroes} />
            <HeroesList
                heroes={heroes}
                searched={searched}
                recruitHero={recruitHero}
                myTeam={myTeam}
            />
        </div>
    </div>
)


export default MainContainer