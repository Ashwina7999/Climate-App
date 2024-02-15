import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: true, name: 'Ashwin A', email: 'arult.ashwin@gmail.com', password: 'Ashwin@123', gender: 'Male', phone: '9123524455', city: 'Coimbatore', country: 'India'
    }
  }

  showSubmit = () => {
    if (this.state.editable) {
      document.getElementById('submit').style.display = 'block';
      document.getElementById('togglePassword').style.display = 'block';
      this.setState({ editable: false })
    }
    else {
      document.getElementById('submit').style.display = 'none';
      document.getElementById('togglePassword').style.display = 'none';
      this.setState({ editable: true })
    }
  }

  showHidePassword = () => {
    const password = document.querySelector('#password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  }

  changeHadler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {

    const { editable, name, email, password, gender, phone, city, country } = this.state

    return (
      <div>
        <div id="" className="ProfileBox">
          <p className='profile-close' onClick={this.props.closeProfile}>&times;</p>
          <div className="reg_main">
            <div className="profile-container">
              <h5 className='edit-register' onClick={this.showSubmit}>Edit <i className='fas'>&#xf044;</i></h5>
              <form className="register-form">
                <h2>{this.props.name}</h2>
                <label>Name:</label>
                <input type="text" name="name" id="name" placeholder="Name" value={name} autoComplete="off" onChange={this.changeHadler} disabled={editable ? 'disabled' : null} />

                <label>Email:</label>
                <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" value={email} onChange={this.changeHadler} disabled={editable ? 'disabled' : null} />

                <label>Password:</label>
                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={this.changeHadler} disabled={editable ? 'disabled' : null} />
                <i className="far fa-eye" id="togglePassword" onClick={this.showHidePassword} style={{ display: 'none' }}></i>

                <label>Gender:</label>
                <select name="gender" id="gender" value={gender} onChange={this.changeHadler} disabled={editable ? 'disabled' : null}>
                  <option name="gender" id="gender" defaultValue value="male">Male</option>
                  <option name="gender" id="gender" value="female">Female</option>
                  <option name="gender" id="gender" value="others">Others</option>
                </select>

                <label>Phone:</label>
                <input type="text" name="phone" id="phone" placeholder="Phone number" value={phone} autoComplete="off" onChange={this.changeHadler} disabled={editable ? 'disabled' : null} />

                <label>City:</label>
                <input type="text" name="city" id="city" placeholder="City" value={city} autoComplete="off" onChange={this.changeHadler} disabled={editable ? 'disabled' : null} />

                <label>Country:</label>
                <input type="text" name="country" id="country" placeholder="Country" value={country} autoComplete="off" onChange={this.changeHadler} disabled={editable ? 'disabled' : null} />

                <div id="submit" className="reg_button" style={{ display: 'none' }}>
                  <button className="profile-btn danger" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div><br></br><br></br>
        </div>
      </div>
    )
  }
}

export default Profile
