import styled from 'styled-components'
import React from 'react';

// Styled with Styled-Components
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Button = styled.button`
    margin: 10px 3%;
    width: 35%;
    height: 35px;
    font-size: 15px;
    border-radius: 5px;
    text-align: center;

    :hover {
        background-color: #d3d3d3;
    }
`;
const Input = styled.input`
    margin: 10px 3%;
    width: 35%;
    height: 35px;
    font-size: 15px;
    border-radius: 5px;
    text-align: center;
`;


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
        return (

            <Form onSubmit={this.login} className="login-form">
                <Input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleChanges}
                    // className="login-name"
                />
                !!! INSECURE - PLEASE DO NOT TYPE IN A PASSWORD !!!
                <Input
                    type="text"
                    placeholder="Do Not Type Password"
                    // value={this.state.password}
                    name="password"
                    onChange={this.handleChanges}
                    // className="login-pass"
                />
                <Button onClick={this.login}>Login</Button>
            </Form>
        );
    }
};

export default Login;

