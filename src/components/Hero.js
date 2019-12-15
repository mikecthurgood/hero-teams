import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const Hero = ({ hero, recruitHero, myTeam }) => {

    const addDefaultSrc = (e) => {
        e.target.src = require('../assets/defaultHeroImage.png')
    }

    return (
        < Card className="hero-card" >
            <div className='hero-image'><Image src={hero.image.url} onError={addDefaultSrc} />

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
    )
}

export default Hero