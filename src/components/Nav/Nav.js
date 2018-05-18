import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component{
    
    render(){
        console.log(this.props);
    return (
        <div>
        <div>
            {this.props.profile_picture}
            {this.props.username}
        </div>
        <div>
            <Link to='/'> <button>Home</button></Link>
            <Link to='/new'> <button>New Post</button></Link>
            <Link to='/'> <button>Logout</button></Link>
        </div>
        </div>
    )
}
}

function mapStateToProps(state){
    return{
        username: state.username,
        profile_picture: state.profile_picture
    }
}


export default connect(mapStateToProps)(Nav);