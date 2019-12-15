import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { buyCake } from './actions/cakeActions';

function App(props) {
  return (
    <div className="App">
      <h2>Number of Cakes in store -{props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numberOfCakes: state.numberOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
