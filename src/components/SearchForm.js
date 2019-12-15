import React from 'react'

class SearchForm extends React.Component {

    state = {
        hero: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.searchHeroes(this.state.hero)
        e.target.hero.value = ""
    }

    render() {
        return (
            <>
                <form className="hero-search-form" autoComplete="off" onSubmit={this.handleSubmit}>
                    <input type="text" name="hero" value={this.state.hero} onChange={this.handleChange} placeholder="Search Heroes" />
                </form>
            </>
        )
    }

}

export default SearchForm