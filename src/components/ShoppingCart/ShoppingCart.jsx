import "./shoppingCart.css";
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";

const ShoppingCart = ({itemsCount, price}) => {

    
  return (
    <div className="shopping-cart d-flex align-items-center">
      <span className="text-primary">
        {itemsCount === 0 ? <RiShoppingCart2Line size={22}/> : <RiShoppingCart2Fill  size={22}/>}
        {/* si itemsCount vaut 0, j'inclus le composant avant les :
            sinon j'importe le composant après les : */}
      </span>
      <span className="badge text-bg-info ms-1">{itemsCount}</span>
      <span className="price-indicator ms-1">{price.toFixed(2)}€</span>
    </div>
  );
};

export default ShoppingCart;
