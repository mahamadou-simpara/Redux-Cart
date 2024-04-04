import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui';

const CartButton = (props) => {
  const dispatch = useDispatch()
  return (
    <button className={classes.button} onClick={() => {dispatch(uiActions.toggleCart())}}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
