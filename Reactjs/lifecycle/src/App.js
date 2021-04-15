import React, { Component } from 'react'
import GithubUserInfo from "./GithubUserInfo";
import Person from "./Person";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Person/>
        <GithubUserInfo username = "imashish1705"/>
      </div>
    )
  }
}
export default App;
