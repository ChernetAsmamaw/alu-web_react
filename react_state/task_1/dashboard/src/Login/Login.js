import React from "react";
import { css, StyleSheet } from "aphrodite";
import { symbol } from "prop-types";

const styles = StyleSheet.create({
  bodyLogin: {
    margin: "20px 0 0px 0px",
    flexGrow: 1,
  },
  smallInput: {
    "@media (max-width: 900px)": {
      display: "block",
      marginTop: "10px",
      marginBottom: "5px",
    },
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)

    // Set the local state of the component
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };
  }

  handleLoginSubmit(event){
    event.preventDefault();
    // Local state is updated to reflect the user is logged in
    this.setState({
      isLoggedIn: true
    })
  }

  // Update the email state when the input changes
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    }, () => {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({
          enableSubmit: true
        })
      }
    })
  }

  // Update the password state when the input changes
  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    }, () => {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({
          enableSubmit: true
        })
      }
    })
  }

  render() {
    return (
      <div className="body-login">
        <div className={css(styles.bodyLogin, styles.smallInput)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}> 
            <label htmlFor="fname" className={css(styles.smallInput)}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value= {this.state.email}
              onChange={this.handleChangeEmail}
              className={css(styles.bodyLoginInput, styles.smallInput)}
            />
            <label
              htmlFor="lname"
              className={css(styles.smallInput, styles.button)}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              className={css(styles.bodyLoginInput, styles.smallInput)}
            />
            <input type='submit' value='Ok' disabled={!this.state.enableSubmit} className={css(styles.button, styles.smallInput)}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
