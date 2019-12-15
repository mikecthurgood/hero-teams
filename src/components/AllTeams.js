import React from 'react'
import { Link } from 'react-router-dom'

const AllTeams = (props) => {

    const handleClick = (team) => {
        props.setTeam(team)

    }
    return (
        <div className="header">
            <br /><br />
            <h2>All Teams</h2>

            {props.createdTeams.map(team => <div key={team.id}><Link to="/my-team" ><h3 onClick={() => handleClick(team)} > {team.name} </h3></Link></div>)}
        </div>
    )
}

export default AllTeams