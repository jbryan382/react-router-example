import React, { Component } from 'react'

class Monster extends Component {
  state = {
    searchTerm: 'griffon',
    monster: [],
  }

  async componentDidMount() {
    let response = await fetch(
      `http://www.dnd5eapi.co/api/monsters/${this.state.searchTerm}`
    )
    let jsonConvert = await response.json()
    this.setState({
      monster: jsonConvert,
    })
    console.log(jsonConvert)
  }

  render() {
    return (
      <>
        <h1>Monster Time!</h1>
        <ul>
          <li>{this.state.monster.name}</li>
          <li>{this.state.monster.size}</li>
          <li>{this.state.monster.type}</li>
          <li>{this.state.monster.armor_class}</li>
          <li>{this.state.monster.alignment}</li>
        </ul>
      </>
    )
  }
}
export default Monster
