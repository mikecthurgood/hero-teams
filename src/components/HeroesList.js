import React from 'react'
import Hero from './Hero'
import { Card } from 'semantic-ui-react'
import './HeroesList.scss'

const HeroesList = ({ heroes, recruitHero, myTeam, searched, showStats, searchFilter }) => {


    return <div className="hero-list">
        <Card.Group className='card-list'>
            {
                heroes && heroes.map(hero =>
                    <Hero hero={hero}
                        key={hero.id}
                        recruitHero={() => recruitHero(hero.id)}
                        myTeam={myTeam}
                        showStats={showStats}
                        searchFilter={searchFilter}
                    />)
            }
            <div className='hero-card-placeholder'></div>
            <div className='hero-card-placeholder'></div>
            <div className='hero-card-placeholder'></div>
            <div className='hero-card-placeholder'></div>
            <div className='hero-card-placeholder'></div>

            {
                searched === true && heroes === "" && <h3>No Heroes Retrieved</h3>
            }
            {/* {
                searched === false && <div className='search-placeholder'><h2>Search for a hero</h2><br />
                </div>
            } */}
        </Card.Group>
    </div>
}

export default HeroesList