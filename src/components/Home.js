import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';
const avengersURL = '/images/avengers.png'
const heroesURL = '/images/heroes-logo.png'
const justiceURL = '/images/justice-league.png'
const tmntURL = '/images/tmnt-logo.png'
const startrekURL = '/images/startrek-logo.png'
const starwarsURL = '/images/starwars-logo.png'
const xmenURL = '/images/xmen-logo.png'

const Home = () => {
    return (
        <div className="App">
            <header className="welcome-screen-container">
                <h1>Heroes Converge. The World Is In Peril.</h1>
                <div className='get-started-container'>
                    <Link className='get-started-link' to='/create-team'>
                        <span className='get-started-button'>
                            <h2>Build Your Team</h2>
                        </span>
                    </Link>
                </div>
                <div className="logos">
                    <div className='square-logos'>
                        <img src={avengersURL} className="Hero-logo" alt="Avengers Logo" /> 
                        <img src={justiceURL} className="Hero-logo" alt="Justice League Logo" /> 
                        <img src={heroesURL} className="Hero-logo" alt="HBO Heroes Logo" /> 
                        <img src={xmenURL} className="Hero-logo" alt="Xmen Logo" /> 
                        <img src={startrekURL} className="Hero-logo" alt="Start Trek Logo" />
                    </div>
                    <div className='wide-logos'>
                        <img src={tmntURL} className="Hero-logo" alt="TMNT Logo" /> 
                        <img src={starwarsURL} className="Hero-logo" alt="Star Wars Logo" /> 
                    </div>
                </div>
                
            </header>
        </div>
    );
}

export default Home;
