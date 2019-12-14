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

class API {
    static getHeroes = (hero) => fetch(HEROAPI + hero).then(resp => resp.json())
    static saveTeam = (team) => fetch(TEAMSAPI, configObj('POST', team))
    static getTeams = () => fetch(TEAMSAPI).then(resp => resp.json())
}
export default API
