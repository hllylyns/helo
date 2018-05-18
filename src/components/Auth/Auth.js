import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer';
import {Link} from 'react-router-dom';

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        }
        this.registerUser = this.registerUser.bind( this );
        this.typePassword = this.typePassword.bind(this);
        this.typeUserName = this.typeUserName.bind(this);
    }

    typeUserName(value) {
        this.setState({ username: value });
    }
    typePassword(value) {
        this.setState({ password: value });
    }
    registerUser( username, password ) {
        axios.put('/:id', { username, password }).then( results => {
          this.props.updateUser;

        });
      }

    render (){
        return (
            <div>
            <h1>Auth</h1>
            <p>Username</p>
            <input value={this.state.username}
                    onChange={(e) => this.typeUserName(e.target.value)}/>
            <p>Password</p>
            <input value={this.state.password}
                    onChange={(e) => this.typePassword(e.target.value)}/>
            {/* <a href={process.env.REACT_APP_LOGIN}>
                <button>Login</button>
            </a> */}
            <button onClick={this.registerUser}>Register</button>
            <button onClick={this.registerUser}>Login</button>
            </div>
        )
    }
}



export default connect(null, {updateUser})(Auth);