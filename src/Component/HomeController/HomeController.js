import React, { Component } from 'react'
import Login from '../Login/Login'
import LogoSideBar from '../LogoSideBar/LogoSideBar'

class HomeController extends Component {

    constructor(props) {
        super(props)
        this.state = { isUserLoggedIn: false }
    }

    loginCheck = (event) => {
        if (event === 'Logout') {
            this.setState({ isUserLoggedIn: false })
        }
        else if (event.state.email === 'arult.ashwin@gmail.com' && event.state.password === 'Ashwin@123') {
            this.setState({ isUserLoggedIn: true })
        }
        else {
            alert('Invalid Credentials. Please Enter valid username and password')
        }

    }

    render() {
        if (this.state.isUserLoggedIn) {
            return <LogoSideBar loginCheck={this.loginCheck} />
        }
        else {
            return <Login loginCheck={this.loginCheck} />
        }
    }
}

export default HomeController
