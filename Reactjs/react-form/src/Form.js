import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            age: ""
        }
    }

    namechangeHandler = (e) => {
        this.setState({username:e.target.value});
    }
    ageChangeHandler = (e) => {
        this.setState({age:e.target.value});
    }
    passwordChangeHandler = (e) => {
        this.setState({password:e.target.value});
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.age);
        this.setState({username:"", age:"", password:""}); //input clear krne k liye 
    }
    render() {
        return (
            <div className="Container">
                <form onSubmit={this.submitHandler}>
                    <input 
                    type="text" 
                    onChange = {this.namechangeHandler}
                    placeholder="username"
                    value = {this.state.username}
                    />
                    <input 
                    type="password"
                    onChange = {this.passwordChangeHandler}
                    placeholder="password"
                    value = {this.state.password}
                    />
                    <input 
                    type="text" 
                    onChange = {this.ageChangeHandler}
                    placeholder="age"
                    value = {this.state.age}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;