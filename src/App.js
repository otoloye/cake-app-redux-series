import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchUsers } from './actions/userActions';

function App({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>User List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map(user => <p>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
