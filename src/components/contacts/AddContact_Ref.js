import React, { Component } from "react";
import { Consumer } from "../../context";
//import uuid from "uuid";
export default class AddContact extends Component {
  //now giving the state
  state = {
    name: "",
    email: "",
    phone: ""
  };
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  //onSubmit function
  onFormSubmit = (dispatch, e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    dispatch({ type: "ADD_CONTACT", payload: contact });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-4">
              <div className="card-body">
                <div className="card-header bg-danger text-light mb-3">
                  Add Contact
                </div>
                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                  <div className="mt-3">
                    <label htmlFor="name" className="text-danger">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form control-lg"
                      placeholder="Enter Name.."
                      name="name"
                      defaultValue={name}
                      ref={this.nameInput}
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="email" className="text-danger">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form control-lg"
                      placeholder="Enter Email.."
                      name="email"
                      defaultChecked={email}
                      ref={this.emailInput}
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="phone" className="text-danger">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control form control-lg"
                      placeholder="Enter Phone.."
                      name="phone"
                      defaultValue={phone}
                      ref={this.phoneInput}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-block btn-danger mt-3"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
