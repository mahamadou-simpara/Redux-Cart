import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  // const quantity = useSelector(state => state.cart.quantity);



  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      <CartItem
          item={{ title: 'Test Item', quantity: 0, total: 18, price: 6 }}
        />

      </ul>
    </Card>
  );
};

export default Cart;
