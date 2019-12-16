import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchUsers } from './actions/userActions';

function App({ users, loading, error, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <h2>User List</h2>
          <div>
            {users.map(user => (
              <p key={user.id}>{user.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ users, loading, error }) => {
  return {
    users,
    loading,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
