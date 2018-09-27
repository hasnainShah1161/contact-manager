import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import Axios from "axios";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };
  showResult = e => {
    this.setState({
      // this will change the state of the <i> tag
      showContactInfo: !this.state.showContactInfo
    });
  };

  // Delete User function
  //we are going to use the axios for the deletion of the user

  deleteUser = async (id, dispatch) => {
    try {
      await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    } catch (e) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };

  render() {
    //const { name, phone, email } = this.props.contact;
    //{name}{phone}{email} etc

    const { name, email, id, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            // we can also do that with destructuring

            <div
              className="card card-body mt-3 mb-4"
              style={{ background: "#DBDEED" }}
            >
              <ul className="list-group">
                <h4 className="text-secondary ">
                  {/* now creating a event on the <i> tag */}
                  {name}{" "}
                  <i
                    onClick={this.showResult}
                    className="fas fa-caret-down text-danger "
                    style={{
                      cursor: "pointer"
                    }}
                  />
                  <i
                    className="fa fa-times text-danger"
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={this.deleteUser.bind(this, id, dispatch)}
                  />
                  <Link to={`contact/edit/${id}`}>
                    <i
                      className="fa fa-edit"
                      style={{
                        float: "right",
                        marginRight: "4px",
                        cursor: "pointer",
                        color: "black"
                      }}
                    />
                  </Link>
                </h4>
                {showContactInfo ? (
                  <div>
                    <li
                      className="list-group-item text-light"
                      style={{ background: "#999999" }}
                    >
                      phone: {phone}
                    </li>
                    <li
                      className="list-group-item text-light"
                      style={{ background: "#999999" }}
                    >
                      city: {email}
                    </li>
                  </div>
                ) : null}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//this is the way define the default props when there are no props defined
Contact.defaultProps = {
  name: "sunny",
  phone: "03000322311",
  city: "wah cantt"
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};
