import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChangeUsername = (event) => {

        this.setState({username: event.target.value});
    }

    handleChangePassword = (event) => {

        this.setState({password: event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Logging in" + JSON.stringify(this.state));
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleFormSubmit} >
                    <label>Username:</label>
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
                    <label>Password:</label>
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;