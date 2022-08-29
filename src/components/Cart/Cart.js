import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartAction from '../../ducks/cart';




function Cart({ items, currency, cart, total, removeFromCart, updateAmount }) {
    function increment(item) {
      updateAmount(item.id, item.amount + 1);
    }
  
    function decrement(item) {
      updateAmount(item.id, item.amount - 1);
    }
     
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {console.log("CART", cart)}
                            <div className="cart__body">
                                {cart.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        {cart === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    cart: state.cart.map(item => ({
      ...item,
      subtotal: 0,
    })),
    total: 
      state.cart.reduce(
        (total, item) => total + 0,
        0
      )
    ,
  });
  
  
  const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);