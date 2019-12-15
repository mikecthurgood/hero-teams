import React from 'react';

const avengersURL = 'https://images-na.ssl-images-amazon.com/images/I/51e%2Bt0Bt1WL._SL1130_.jpg'
const justiceURL = 'https://res.cloudinary.com/teepublic/image/private/s--uU7EEqzO--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1470699398/production/designs/623110_1.jpg'
const xmenURL = 'https://cdn.freebiesupply.com/logos/large/2x/x-men-logo-png-transparent.png'

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logos">
                    <img src={avengersURL} className="App-logo" alt="logo" /> &nbsp;
                    <img src={justiceURL} className="App-logo" alt="logo" /> &nbsp;
                    <img src={xmenURL} className="App-logo" alt="logo" />
                </div>
                <p>Heroes Converge. The World Is In Peril.</p>
                <a href="/create-team">Get Started</a>
            </header>
        </div>
    );
}

export default Home;
