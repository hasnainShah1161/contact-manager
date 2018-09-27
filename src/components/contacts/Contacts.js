import React, { Component } from "react";
import Contact from "./Contact";

import { Consumer } from "../../context";

export default class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
            <h1 className="display-4 mb-3">
            <span className="text-danger">Contacts </span>
            List
          </h1>
      <Consumer>
        {value => {
          const { Contacts } = value;
      
          return Contacts.map(contact => (
            //so we have to render the data to the Contact component and give it some propertiess
            //the key property is to give the unique key to every child
            <Contact key={contact.id} contact={contact} />
          ));
        }}
      </Consumer>
      </React.Fragment>
    );
  }
}
