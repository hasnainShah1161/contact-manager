import React, { Component } from "react";
import { Consumer } from "../../context";
import TextComponentsGroup from "../layout/TextComponentsGroup";
import Axios from "axios";
export default class AddContact extends Component {
  //now giving the state
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  //onChange function to give the values to the input fields
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //onSubmit function
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Form Validation
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
    }
    const newContact = {
      name,
      email,
      phone
    };
    //adding contact to the json place holder
    const res = await Axios.post(`https://jsonplaceholder.typicode.com/users/`,newContact);
    
      dispatch({ type: "ADD_CONTACT", payload: res.data })
    
    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {}
    });
    {
      this.props.history.push("/");
    }
  };
  render() {
    const { name, email, phone, errors } = this.state;
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
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextComponentsGroup
                    label="Name"
                    value={name}
                    name="name"
                    placeholder="Enter Name.."
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextComponentsGroup
                    label="Email"
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Enter email.."
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextComponentsGroup
                    label="Phone"
                    value={phone}
                    name="phone"
                    placeholder="Enter Phone.."
                    onChange={this.onChange}
                    error={errors.phone}
                  />
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
