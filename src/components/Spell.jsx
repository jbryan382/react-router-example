import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

class Spell extends Component {
  state = {
    searchTerm: '',
    spell: [],
  }
  async componentDidMount() {
    let response = await fetch(
      `http://www.dnd5eapi.co/api/spells/${this.props.match.params.spell}`
    )
    let jsonConvert = await response.json()
    this.setState({
      spell: jsonConvert,
    })
    console.log(jsonConvert)
  }

  render() {
    console.log(this.props.match.params)
    return (
      <>
        <h1>Lets Start with Some Spells!!!!</h1>
        <ul>
          <li>{this.state.spell.name}</li>
          <li>{this.state.spell.desc}</li>
          <li>{this.state.spell.higher_level}</li>
          <li>{this.state.spell.range}</li>
          <li>{this.state.spell.components}</li>
          <li>{this.state.spell.material}</li>
          <li>{this.state.spell.ritual ? <p>True</p> : <p>False</p>}</li>
        </ul>
      </>
    )
  }
}
export default Spell
