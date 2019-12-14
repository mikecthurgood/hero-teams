import React from 'react'
import SearchForm from './SearchForm'
import HeroesList from './HeroesList'

class MainContainer extends React.Component {


    render() {
        return (
            <div className="main">
                <div className="header">
                    <h1>Search Heroes</h1>
                    <SearchForm searchHeroes={this.props.searchHeroes} />
                    <HeroesList
                        heroes={this.props.heroes}
                        searched={this.props.searched}
                        recruitHero={this.props.recruitHero}
                        myTeam={this.props.myTeam}
                    />
                </div>
            </div>
        )
    }

}

export default MainContainer