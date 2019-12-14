import React from 'react'
import Hero from './Hero'
import { Button } from 'semantic-ui-react'


class HeroTeam extends React.Component {
    state = {
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            team: {
                name: e.target.teamName.value,
                heroes: [this.props.myTeam]
            }
        })
    }

    handleSave = () => {
        this.props.saveTeam(this.state.team)
    }

    render() {
        const { heroes, recruitHero, myTeam, searched } = this.props
        return (
            <div className="main">
                <div className="header">
                    <h2>My Hero Team</h2>
                    {!this.state.team ?
                        <>
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="teamName">Team Name: </label>
                                <input name="teamName" type="text" placeholder="Team Name..." />
                                <input type="submit" />
                            </form>
                            <br />
                            <Button onClick={this.props.clearTeam}>Reset Team</Button>
                        </>
                        :
                        <div>
                            <h2>{this.state.team.name}</h2>
                            <Button onClick={this.handleSave}>Save Team</Button>
                            <Button onClick={this.props.clearTeam}>Reset Team</Button>
                        </div>
                    }
                    <br /> <br />
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
                </div>
            </div>
        )
    }
}

export default HeroTeam