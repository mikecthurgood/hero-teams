import React from 'react'
import { Link } from 'react-router-dom'

const AllTeams = ({ setTeam, createdTeams }) => {

    const handleClick = (team) => {
        setTeam(team)
        console.log(team)

    }
    return (
        <div className="header">
            <br /><br />
            <h2>All Teams</h2>

            {/* {createdTeams.map(team => <div key={team.id}><Link to="/my-team" ><h3 onClick={() => handleClick(team)} >{team.name}</h3></Link></div>)} */}
            {createdTeams.map(team => <div key={team.id}><h3 onClick={() => handleClick(team)} >{team.name}</h3></div>)}
        </div>
    )
}

export default AllTeams