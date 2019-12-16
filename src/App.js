import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'
import HeroTeam from './components/HeroTeam'
import API from './helpers/API'
import AllTeams from './components/AllTeams'
const App = () => {

  const [allHeroes, setAllHeroes] = useState([])
  const [heroes, setHeroes] = useState([])
  const [myTeam, setMyTeam] = useState({ name: "", heroes: [] })
  const [createdTeams, setCreatedTeams] = useState([])
  const [searched, setSearched] = useState(false)
  const [flipped, setFlipped] = useState([])

  useEffect(() => (API.getHeroes("").then(allHeroes => setAllHeroes(allHeroes))), [])
  useEffect(() => (API.getTeams().then(createdTeams => setCreatedTeams(createdTeams))), [])

  const searchHeroes = (hero) => {
    API.getHeroes(hero)
      .then(heroes => {
        setHeroes(heroes)
        setSearched(true)
      })
  }

  const showStats = (heroId) => {
    if (!flipped.includes(heroId)) {
      setFlipped([...flipped, heroId])
    } else
      setFlipped(flipped.filter(id => heroId !== id))
  }


  const saveTeam = (team) => {
    setCreatedTeams([...createdTeams, team])
    API.saveTeam(team)
      .then(alert(`${team.name} saved to world roster. Thank you young hero.`))
      .then(setTeam(team))
  }

  const recruitHero = (heroID) => {
    if (!myTeam.heroes.includes(heroID)) {
      myTeam.heroes.length < 6 ? setMyTeam({ name: "", heroes: [...myTeam.heroes, heroID] }) : alert('6 is the maximum team number. Please remove a member or head to the My Teams page to save your team')
    } else {
      const newTeam = myTeam.heroes.filter(hero => hero !== heroID)
      setMyTeam({ name: myTeam.name, heroes: newTeam })
    }
  }

  const setTeam = (team) => {
    setMyTeam({ name: team.name, heroes: team.heroes[0] })
    // console.log(team)
    // console.log(team.heroes[0])
  }

  const clearTeam = () => {
    setMyTeam({ name: "", heroes: [] })
  }
  return (

    <>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/create-team" component={() =>
        <MainContainer
          searchHeroes={searchHeroes}
          heroes={heroes}
          searched={searched}
          recruitHero={recruitHero}
          myTeam={myTeam}
          flipped={flipped}
          showStats={showStats}
        />} />
      <Route path="/my-team" component={() =>
        <HeroTeam
          heroes={myTeam.heroes.map(hero => allHeroes.find(h => h.id === hero))}
          myTeam={myTeam}
          saveTeam={saveTeam}
          recruitHero={recruitHero}
          clearTeam={clearTeam}
          flipped={flipped}
          showStats={showStats}
        />} />
      <Route path="/teams" component={() =>
        <AllTeams
          createdTeams={createdTeams}
          setTeam={setTeam}
        />} />
    </>
  );
}

export default withRouter(App);
