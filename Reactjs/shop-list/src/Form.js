import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            qty: ""
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.createItem(this.state);
        this.setState({name: "", qty: ""})
    }
    render() {
        return (
            <div className = "container">
                <form onSubmit = {this.submitHandler}>
                    <input
                    type = "text"
                    placeholder = "item name"
                    onChange = {this.changeHandler}
                    value = {this.state.name}
                    name = "name"
                    />
                    <input 
                    type = "text"
                    placeholder = "Quantity"
                    onChange = {this.changeHandler}
                    value = {this.state.qty}
                    name = "qty"
                    />
                    <button>Add itmes</button>
                </form>
            </div>
        )
    }
}
export default Form;