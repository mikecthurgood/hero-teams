import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'
import HeroTeam from './components/HeroTeam'
import API from './helpers/API'
import AllTeams from './components/AllTeams'
class App extends React.Component {

  state = {
    allHeroes: [],
    heroes: [],
    myTeam: [],
    createdTeams: [],
    searched: false
  }

  searchHeroes = (hero) => {
    API.getHeroes(hero)
      .then(heroes => {
        this.setState({ heroes, searched: true })
      })
  }

  componentDidMount() {
    API.getHeroes("").then(allHeroes => this.setState({ allHeroes }))
    API.getTeams().then(createdTeams => this.setState({ createdTeams }))

  }

  saveTeam = (team) => {
    this.setState({ createdTeams: [...this.state.createdTeams, team] })
    API.saveTeam(team).then(alert(`${team.name} saved to world roster. Thank you young hero.`)).then(this.setState({ myTeam: [] }))
  }

  recruitHero = (heroID) => {
    if (!this.state.myTeam.includes(heroID)) {
      this.state.myTeam.length < 6 ? this.setState({ myTeam: [...this.state.myTeam, heroID] }) : alert('6 is the maximum team number. Please remove a member or head to the My Teams page to save your team')
    } else {
      const newTeam = this.state.myTeam.filter(hero => hero !== heroID)
      this.setState({ myTeam: newTeam })
    }
  }

  setTeam = (team) => {
    this.setState({ myTeam: team.heroes[0] },
      //   () => {
      //   // this.props.history.push('/my-teams')
      // }
    )

    // alert(`${team.name} loaded. Visit My Team page to review`)
  }

  clearTeam = () => {
    this.setState({ myTeam: [] })
  }

  render() {

    return (

      <>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/create-team" component={() =>
          <MainContainer
            searchHeroes={this.searchHeroes}
            heroes={this.state.heroes}
            searched={this.state.searched}
            recruitHero={this.recruitHero}
            myTeam={this.state.myTeam} />} />
        <Route path="/my-team" component={() =>
          <HeroTeam
            heroes={this.state.myTeam.map(hero => this.state.allHeroes.find(h => h.id === hero))}
            myTeam={this.state.myTeam}
            saveTeam={this.saveTeam}
            recruitHero={this.recruitHero}
            clearTeam={this.clearTeam}
          />} />
        <Route path="/teams" component={() =>
          <AllTeams
            createdTeams={this.state.createdTeams}
            setTeam={this.setTeam}
          />} />
      </>
    );
  }
}



export default withRouter(App);
