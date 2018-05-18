import React, {Component} from 'react';

class Dashboard extends Component {
  
    constructor(){
        super();

        this.state ={
            search:"",
            posts:[]
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(value){
        this.setState({search:value})
    }
    render (){
        return (
            <div>
            <h2>Dashboard</h2>
            <p>Search</p>
            <input value={this.state.search}
                    onChange={(e) => this.handleSearch(e.target.value)}/>
            </div>

        )
    }
}

export default Dashboard;