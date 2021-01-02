const HEROAPI = 'http://localhost:3000/heroes?name_like='
const TEAMSAPI = 'http://localhost:3000/teams'
const GRAPHQLURL = 'http://localhost:8080/graphql'

const get = (graphqlQuery) => (
    fetch(GRAPHQLURL, {
        method: 'POST',
        body: JSON.stringify(graphqlQuery),
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'Accept'      : `application/json`
        }
    }).then(resp =>  resp.json())
)

const post = (graphqlQuery, token) =>(
    fetch(GRAPHQLURL, {
        method: 'POST',
        body: JSON.stringify(graphqlQuery),
        headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept'      : `application/json`
        }
    })
)

const graphQlgetHeroes = async () => {
    const graphqlQuery = { query: `
    {
        heroes {
          heroCount
          heroes {
            id
            name
            powerStats
            biography
            appearance
            connections
            imageUrl 
          }
        }
      }`
    }
    const heroes = await get(graphqlQuery)
    const mappedHeroes = heroes.data.heroes.heroes.map(hero => {
        const { id, name, powerStats, biography, appearance, connections, imageUrl } = hero
        return {
          id,
          name,
          powerstats: JSON.parse(powerStats),
          biography: JSON.parse(biography),
          appearance: JSON.parse(appearance),
          connections: JSON.parse(connections),
          imageUrl
        }
    })
    return mappedHeroes
}

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
    getTeams,
    graphQlgetHeroes
}
