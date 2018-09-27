import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import EditContacts from "./components/contacts/EditContacts";
import Header from "./components/layout/Header";
import "./App.css";
import About from "./components/pages/About";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//now importing the Provider from Context

import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import NotFound from "./components/pages/NotFound";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            {/* this is the header component */}
            <Header brandName="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route
                  exact
                  path={`/contact/edit/:id`}
                  component={EditContacts}
                />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
              {/* <AddContact />
            <Contacts /> */}
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
