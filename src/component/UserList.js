import React, {Component} from 'react';

class UserList extends Component{

   handleRemoveUser = (userName) => {
    this.props.onRemoveUser(userName);
   }

    render() {
        const { users } = this.props;

        return (
            <div className="user-list">
                <h2>User List</h2>
                {users.length === 0 ? (
                    <p>No user added</p>
                ):(
                    <ul>
                        {users.map((user, index) => (
                           <li key={index}
                            style={{
                                borderLeft:`2px solid ${user.status === 'Active' ? 'green' : 'orangered'}`,
                                paddingLeft:'10px',
                            }}

                           >
                            {user.name} 
                           <button className='rbtn' onClick={() => this.handleRemoveUser(user.name)}> x </button>
                           </li>
                        ))}
                    </ul>
                )

                }
            </div>
        )
    }
}

export default UserList;