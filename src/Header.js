import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default class Header extends Component {
  state = {
    darkMode: false
  }

  handleToggle = () => {
    console.log('here');
    this.setState({darkMode: !this.state.darkMode})
    this.props.handleToggle()
  }

  render() {
    return (
      <div className={`ui fixed menu ${this.state.darkMode && "inverted"}`}>
        <Logo />
        <div className="right menu">
          <Menu handleToggle={() => this.handleToggle()}/>
        </div>
      </div>
    )
  }
}
