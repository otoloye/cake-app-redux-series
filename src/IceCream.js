import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from './actions/iceCreamActions';

function IceCream(props) {
  const purchaseIceCream = e => {
    e.preventDefault();
    if (props.numberOfIceCream > 0) {
      props.buyIceCream();
    }
  };

  return (
    <div>
      <h2>Number of Ice Cream in store - {props.numberOfIceCream}</h2>
      <button onClick={purchaseIceCream}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     buyIceCream: () => dispatch(buyIceCream())
//   };
// };

export default connect(mapStateToProps, { buyIceCream })(IceCream);
