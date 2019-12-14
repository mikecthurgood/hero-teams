import React from 'react'
import Hero from './Hero'



class HeroesList extends React.Component {
    render() {
        const { heroes, recruitHero, myTeam, searched } = this.props
        return (
            <div className="hero-list">
                <div className="ui cards">
                    {
                        heroes && heroes.map(hero =>
                            <Hero hero={hero}
                                key={hero.id}
                                recruitHero={() => recruitHero(hero.id)}
                                myTeam={myTeam}
                            />)
                    }
                    {
                        searched === true && heroes === "" && <h3>No Heroes Retrieved</h3>
                    }
                    {
                        searched === false && <div className='search-placeholder'><h2>Search for a hero</h2><br />
                        </div>
                    }

                </div>
            </div>
        )

    }
}

export default HeroesList