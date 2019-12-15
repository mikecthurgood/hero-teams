import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const Hero = ({ hero, recruitHero, myTeam, flipped, showStats }) => {

    const addDefaultSrc = (e) => {
        e.target.src = require('../assets/defaultHeroImage.png')
    }

    return (
        <>
            {console.log(hero)}
            < Card className="hero-card" >
                <div className='hero-image' onClick={() => showStats(hero.id)}>
                    {!flipped.includes(hero.id) ?
                        <Image src={hero.image.url} onError={addDefaultSrc} />
                        :
                        <div className='hero-stats'>
                            <h4>Alter Ego: {hero.biography['full-name']}</h4>
                            <p><strong>Birth Place</strong>: {hero.biography['place-of-birth']}</p>
                            <h4>Power Stats:</h4>
                            <p className='power-stats'><strong>Intelligence</strong>: {hero.powerstats.intelligence} <br />
                                <strong>Strength</strong>: {hero.powerstats.strength}<br />
                                <strong>Speed</strong>: {hero.powerstats.speed}<br />
                                <strong>Durability</strong>: {hero.powerstats.durability}<br />
                                <strong>Power</strong>: {hero.powerstats.power}<br />
                                <strong>Combat</strong>: {hero.powerstats.combat}</p>

                            <p><strong>Affiliations</strong>: {hero.connections['group-affiliation']}</p>

                        </div>
                    }

                </div>

                <Card.Header><h2>{hero.name}</h2></Card.Header>
                <Card.Description>
                    <p>Alter-Ego: {hero.biography["full-name"] !== "" ? hero.biography["full-name"] : "None"} <br />
                        Alignment: {hero.biography.alignment}</p>
                </Card.Description>
                <Button onClick={recruitHero} className={myTeam.heroes.includes(hero.id) ? 'negative' : 'positive'}>{
                    myTeam.heroes.includes(hero.id) ?
                        'Drop From Team' : 'Recruit To Team'
                }</Button>

            </Card >
        </>
    )
}

export default Hero