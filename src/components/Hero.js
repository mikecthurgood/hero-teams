import React, {useState} from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import './Hero.scss'
const Hero = ({ hero, recruitHero, myTeam, searchFilter }) => {

    const addDefaultSrc = (e) => {
        e.target.src = require('../assets/defaultHeroImage.png')
    }

    const [flipped, setFlipped] = useState(false)
    const heroHighlight = searchFilter ? `<span class='highlight'>${searchFilter.toUpperCase()}</span>` : '';
    const heroName = searchFilter ? hero.name.toUpperCase().replace(searchFilter.toUpperCase(), heroHighlight) : hero.name.toUpperCase();
    // const heroName = hero.name;
    return (
        <>
            {/* {console.log(hero)} */}
            < Card className="hero-card" onClick={() => setFlipped(!flipped)}>
                <div className='hero-image'>
                    {!flipped ?
                        <Image src={hero.imageUrl} onError={addDefaultSrc} />
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

                <Card.Header><h2 className='hero-name' dangerouslySetInnerHTML={{__html: `${heroName}`}} /></Card.Header>
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