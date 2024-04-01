import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
const CartWidget = () => {
  const {quantity} = useContext(CartContext)

    return (
      <>
      <span>{ quantity}</span></>
  )
}
export default CartWidget;