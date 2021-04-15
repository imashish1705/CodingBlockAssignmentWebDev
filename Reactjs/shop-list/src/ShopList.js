import React, { Component } from 'react';
import Form from "./Form";
class ShopList extends Component {
    constructor() {
        super();
        this.state = {
           items: [
        {
            name: "Sugar",
            qty: 3
        },
        {
            name: "Rice",
            qty: 10
        },
      ]
            
    }
}
createItemHandler = (item) => {
const newItem = this.state.items.slice();

    newItem.push(item);
    this.setState({items:newItem});


}
    render() {
        let items = this.state.items.map((i,idx) => { //here i represents itrator itrate in each idx for fetching the value and "idx" is the key
            return <li  key = {idx}>
               {i.name} - {i.qty} 
            </li>
        })
        return (
            <div>
              <h1>Shopping List</h1>
              <ul>
                  {items}
              </ul>  
              <Form createItem = {this.createItemHandler}/>
            </div>
        )
    }
}
export default ShopList;