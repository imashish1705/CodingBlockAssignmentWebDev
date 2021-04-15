import React, { Component } from 'react'
import Form from "./Form";
import Multiform from "./Multiform";
 class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello from react app</h1>
        <Form/>
        <h1>Hello Multiform</h1>
        <Multiform/>
      </div>
    )
  }
}
export default App;