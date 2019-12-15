import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import { Button, Card } from 'semantic-ui-react'

const HeroTeam = ({ heroes, recruitHero, myTeam, searched, clearTeam, saveTeam }) => {

    const [team, setTeam] = useState({ name: 'test', heroes: [{ name: 'test man', powers: 'testing like a boss' }] })
    const [teamName, setTeamName] = useState("")

    useEffect(() => (setTeam({ heroes })), [heroes])

    const handleSubmit = e => {
        e.preventDefault()
        setTeam({
            name: teamName,
            heroes: [myTeam]
        })
        // saveTeam(team)
    }

    const handleChange = e => {
        e.preventDefault()
        setTeamName(e.target.value)
    }

    return (
        <>
            <div className="main">
                <div className="header">
                    <h2>My Hero Team</h2>
                    {heroes.length > 0 ?
                        <div className='save-and-clear-buttons'>
                            <h2>{team.name}</h2>
                            <form onSubmit={handleSubmit}>
                                <label>Team Name: </label>
                                <input name="teamName" onChange={handleChange} type="text" placeholder="Team Name..." />
                            </form>
                            <Button onClick={handleSubmit}>Save Team</Button>
                            <Button onClick={clearTeam}>Clear Team</Button>

                            <br /><br />
                        </div>
                        :
                        <>
                            <h2>No heroes recruited yet </h2>
                        </>
                    }


                    <div className="hero-list">
                        <Card.Group className='card-list'>
                            {
                                heroes && heroes.map(hero =>
                                    <Hero hero={hero}
                                        key={hero.id}
                                        recruitHero={() => recruitHero(hero.id)}
                                        myTeam={myTeam}
                                    />)
                            }
                        </Card.Group>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroTeam