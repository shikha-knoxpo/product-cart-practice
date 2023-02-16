import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementByAmount } from "../counterSlice";
const Cart = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <>
      Cart{count}
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(11))}
      >
        Increment
      </button>
    </>
  );
};

export default Cart;
