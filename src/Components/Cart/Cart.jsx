import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useLocation } from "react-router-dom";
import Checkout from "../Checkout/Checkout"

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    const getCategory = useLocation().pathname;
    const Title = getCategory === "/" ? "Home" : getCategory.replace("/", "");

    const getTotal = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };
    const removeItemCart = (id) => {
        removeItem(id)
        alert("item eliminado del carrito")
    }

    if(cart.length === 0) return <h2 className="text-center">No hay productos en el carrito</h2>;
    
    return (
        //comprobamos antes de que se renderice si hay objetos en el cart  

        <div className="container">
            <div className="row">
            <div className="col-md-8">
            <h2 className="my-4">{Title}</h2>
            {
                cart.map(product => (
                    <div key={product.id} className="row m-3 border-bottom align-items-center">
                        <div className="col-md-3 text-center">
                            <img src={product.thumbnail} className="img-thumbnail" alt="" />
                        </div>
                        <div className="col-md-2">{product.title}</div>
                        <div className="col-md-2">${product.price} x {product.quantity}</div>
                        <div className="col-md-2">${product.price * product.quantity}</div>
                        <div className="col-md-3">
                            <div className="btn-group">
                            <button className="btn btn-danger" onClick={() => removeItemCart(product.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="col-md-4">
                <h3 className="my-4">Total: ${getTotal()}</h3>
                <Checkout />
            </div>
            </div>
        </div>
    );
};

export default Cart;
