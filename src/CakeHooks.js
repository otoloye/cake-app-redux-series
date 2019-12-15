import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './actions/cakeActions';

function CakeHooks() {
  const numberOfCakes = useSelector(state => state.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes in from hooks store - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeHooks;
