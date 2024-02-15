import React, { Component } from 'react';
import './Login.css';
import Profile from '../Profile/Profile';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: 'arult.ashwin@gmail.com', password: 'Ashwin@123', register: false
        }
    }


    showHidePassword = () => {
        const password = document.querySelector('#password');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    }

    openRegisterControl = () => {
        this.setState({ register: true })
    }

    closeRegisterControl = () => {
        this.setState({ register: false })
    }

    setEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    setPassword = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {

        const { email, password } = this.state;

        return (
            <div className='login-background'>
                <div className="contain">
                    <div className="wrap">

                        <br></br>
                        <h1 className="title">Login</h1>
                        <br></br><br></br>
                        <div className="hold">
                            <input className="login-input" type="email" id="email" name="email" value={email} onChange={this.setEmail} placeholder="Email" ></input>
                            <span className="icons"><i className="fas fa-user-alt"></i></span>
                        </div>
                        <br></br>
                        <div className="hold">
                            <input className="login-input" type="password" id="password" name="password" value={password} onChange={this.setPassword} placeholder="Password"></input>
                            <span className="icons"><i className="fas fa-lock"></i></span>
                            <i className="far fa-eye password-eye" id="togglePassword" onClick={this.showHidePassword}></i>
                        </div>
                        <br></br>
                        <button className="btn danger" onClick={() => this.props.loginCheck(this)}>Login</button>
                        <br></br><br></br><br></br>
                        <p className="new_user" onClick={this.openRegisterControl}>New User? Sign up</p>
                        {this.state.register && <Profile name='Register Page' closeProfile={this.closeRegisterControl} />}
                        <br></br>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login
