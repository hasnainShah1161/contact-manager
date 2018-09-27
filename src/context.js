// this is file behave like the global provider for the app
// this will provide the data to our app that is need ..so we will define all the states there!!!

import React, { Component } from "react";
import Axios from "axios";

//now inporting other API that will be responsible for the deletion of the profile .. and this will take the two arguments .. one is the state and the second one is the type of action ... in this case we are deleting the profile so will give it the type of 'DELETE_CONTACT'.. the type will be given in the form of string
const reducer = (state, action) => {
  //now in this case the best way of doing this by SWITCHES bcz they are neater to do ..we can also appply the IF statements

  switch (action.type) {
    //Delete contact
    case "DELETE_CONTACT":
      return {
        ...state,
        Contacts: state.Contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    //now we also want to add the contact
    case "ADD_CONTACT":
      return {
        ...state,
        Contacts: [action.payload, ...state.Contacts]
      };
      case 'UPDATE_CONTACT':
      return {
        ...state,
        Contacts: state.Contacts.map(contact => contact.id === action.payload.id ? (contact =action.payload) : contact)
      }
    default:
      return state;
  }
};

// we hava to create the Context so that can be use to provide and to consume stuff from here

const Context = React.createContext();

export class Provider extends Component {
  //in this case this provider class will provide the state to all the application ..so we have to define the  state here which will have the global scope

  state = {
    Contacts: [],

    // we need to dispatch the deleted data
    dispatch: action => this.setState(state => reducer(state, action))
  };

  //fetching the data from the JSONplaceHOLDER fro this we are going to use the axois

  //we mostly use ComponentDidMount for the HTTPs requests
  async componentDidMount() {
    const response = await Axios.get("https://jsonplaceholder.typicode.com/users"); this.setState({Contacts:response.data})
    
  }
  //This class also have the render method which will be use o render stuff
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

//we have to export this so the data can be used in other components

export const Consumer = Context.Consumer;
