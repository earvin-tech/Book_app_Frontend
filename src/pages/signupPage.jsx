import React from "react";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleChangeUsername = (event) => {

        this.setState({username: event.target.value});
    }

    handleChangePassword = (event) => {

        this.setState({password: event.target.value});
    }

    handleChangeEmail = (event) => {

        this.setState({email: event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Creating User" + JSON.stringify(this.state));
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Email:</label>
                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                    <label>Username:</label>
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                    <label>Password:</label>
                    <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;