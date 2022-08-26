import "./shoppingCart.css";
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";

const ShoppingCart = () => {


    
  return (
    <div className="shopping-cart">
      <RiShoppingCart2Line />
      <span className="badge text-bg-info ms-1">0</span>
      <span className="price-indicator ms-1">0€00</span>
    </div>
  );
};

export default ShoppingCart;
