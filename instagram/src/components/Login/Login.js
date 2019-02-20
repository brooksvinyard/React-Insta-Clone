import React from 'react';
import './Login.css';

// const Login = props => {
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });

    }

    login = e => {
        // e.preventDefault();

        localStorage.setItem('username', this.state.username)
        // this.setState({ username: '' })

    }

    render() {
        { console.log(this.state); }
        return (

            <form onSubmit={this.login} className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleChanges}
                    className="login-name"
                />
                <input
                    type="text"
                    placeholder="Password"
                    // value={this.state.password}
                    name="password"
                    onChange={this.handleChanges}
                    className="login-pass"
                />
                <button onClick={this.login}>Login</button>
            </form>
        );
    }
};

export default Login;

