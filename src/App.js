import React, { Component } from 'react'
import Header from './Header'
import TweetsContainer from './TweetsContainer'

export default class App extends Component {

  handleToggle = () => {
    console.log('here');
  }
  render() {
    return (
      <div id="wrapper" className={""/* dark-mode */}>
        <Header handleToggle={this.handleToggle} />
        <TweetsContainer />
      </div>
    )
  }
}
