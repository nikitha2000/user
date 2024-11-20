import React, { Component } from 'react';
import UserList from './UserList';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userStatus:'Active'
    };
  }

  
  handleInputChange = (event) => {
    this.setState({
      userName: event.target.value  
    });
  };

  handleStatusChange =(event) => {
    this.setState({
      userStatus: event.target.value,
    })
  }


  handleSubmit =() => {
    const { userName, userStatus } = this.state;

    if(userName.trim() === '') {
      //alert('please enter a valid user name');
      return;
    }

    this.props.onAddUser(userName, userStatus);

    this.setState({userName:'',userStatus:'Active' });
  };




  render() {
    const { userName, userStatus} = this.state;
    return (
      <div className="add-user-form">
        
            <h2>Add a New User</h2>
            <input
             type="text"
             placeholder="Enter user name"
             value={userName}
             onChange={this.handleInputChange}  
            />
             <div className='user-status'>
              <label htmlFor='userstatus'>User Status:</label>
              <select value={userStatus} onChange={this.handleStatusChange}>
                <option value="Active">Active</option>
                <option value="Deactivate">Deactivate</option>
              </select>
            </div>
           <button onClick={this.handleSubmit} disabled={userName.trim() === ''}>Create User</button>
        </div>
    );
  }
}

export default AddUser;
