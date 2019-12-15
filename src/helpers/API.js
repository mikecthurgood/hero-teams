const HEROAPI = 'http://localhost:3000/heroes?name_like='
const TEAMSAPI = 'http://localhost:3000/teams'

const configObj = (type, body = undefined) => {
    return {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }
}

const getHeroes = (hero) => fetch(HEROAPI + hero).then(resp => resp.json())
const saveTeam = (team) => fetch(TEAMSAPI, configObj('POST', team))
const getTeams = () => fetch(TEAMSAPI).then(resp => resp.json())

export default {
    getHeroes,
    saveTeam,
    getTeams
}
