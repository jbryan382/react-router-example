import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SpellList extends Component {
  state = {
    searchTerm: '',
    spells: [],
  }
  async componentDidMount() {
    let response = await fetch(`http://www.dnd5eapi.co/api/spells/`)
    let jsonConvert = await response.json()
    this.setState({
      spells: jsonConvert.results,
    })
    console.log(jsonConvert)
  }

  searchSpell = () => {
    let searchResponse = fetch(
      `http://www.dnd5eapi.co/api/spells/${this.state.searchTerm}`
    )
    let jsonConvertSearch = searchResponse.json()
    this.setState({
      spell: jsonConvertSearch,
    })
  }

  render() {
    return (
      <>
        <h1>Lets Start with Some Spells!!!!</h1>
        <ul>
          {this.state.spells.map((spell, keys) => {
            return (
              <Link to={`/${spell.index}`} key={keys}>
                <li>{spell.name}</li>
              </Link>
            )
          })}
        </ul>
      </>
    )
  }
}
export default SpellList
