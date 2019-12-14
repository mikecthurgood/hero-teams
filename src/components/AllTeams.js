import React from 'react'
import { Link } from 'react-router-dom'

class AllTeams extends React.Component {

    handleClick = (team) => {
        this.props.setTeam(team)

    }

    render() {
        return (
            <div className="header">
                <br /><br />
                <h2>All Teams</h2>

                {this.props.createdTeams.map((team, i) => <div key={team.id}><Link to="/my-team" ><h3 onClick={() => this.handleClick(team)} > {team.name} </h3></Link></div>)}
            </div>
        )
    }
}

export default AllTeams