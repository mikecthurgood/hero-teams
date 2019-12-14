import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const Hero = (props) => {

    const { hero, recruitHero, myTeam } = props
    return (
        < Card className="hero-card" >
            <Image src={hero.image.url} />
            <Card.Header><h2>{hero.name}</h2></Card.Header>
            <Card.Description>
                <p>Alter-Ego: {hero.biography["full-name"] !== "" ? hero.biography["full-name"] : "None"} <br />
                    Alignment: {hero.biography.alignment}</p>
            </Card.Description>
            <Button onClick={recruitHero} className={myTeam.includes(hero.id) ? 'negative' : 'positive'}>{
                myTeam.includes(hero.id) ?
                    'Drop From Team' : 'Recruit To Team'
            }</Button>

        </Card >
    )
}

Hero.defaultProps = {
    hero: {
        image: {
            url: require('../assets/defaultHeroImage.png')
        }
    }
}

export default Hero