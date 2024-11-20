import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './component/AddUser'
import UserList from './component/UserList'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showAddUser: true
    };
  }
 
  addUser = (userName, userStatus) =>{
   if (userName.trim() === '') {
    return
   }

   this.setState({
    users: [...this.state.users, {name:userName, status: userStatus}],
   });
   
  };


  removeUser = (userName) => {
    this.setState({
      users: this.state.users.filter((user) => user.name !== userName), 
    });
  };


  toggleSection = (section) => {
    this.setState({
      showAddUser: section === 'addUser'
    });
  };
  
  render() {
    return (
      <div className="App">
        <div className='fulbox'>
        <h1>Simple User App</h1>
        
        <div className="button-container">
          <button onClick={() => this.toggleSection('addUser')}>Add User</button>
          <button onClick={() => this.toggleSection('userList')}>View User List</button>
        </div>

        {this.state.showAddUser ? (
          <AddUser onAddUser={this.addUser} />
        ) : (
          <UserList users={this.state.users} onRemoveUser={this.removeUser} />
        )}
        
        </div>
      </div>
    )
  }

}
export default App;
