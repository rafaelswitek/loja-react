import { List } from "@material-ui/core";
import { useCart } from '../context/CartContext';
import ProductCart from "../components/ProductCart";

function Cart() {
  const { cartData } = useCart();

  return (
    <List>
      {cartData.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </List>
  );
}

export default Cart;