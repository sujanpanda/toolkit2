import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modals/modalSlice';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    if(amount < 1) {
        return <section className='cart'>
            <header>
                <h2>Your Bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
    }
  return (
    <section className='cart'>
        <header>
            <h2>Your Bag</h2>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
            </footer>
            <button className='btn clear-btn' onClick={() => dispatch(openModal())}>clear cart</button>
        </header>
    </section>
  )
}

export default CartContainer