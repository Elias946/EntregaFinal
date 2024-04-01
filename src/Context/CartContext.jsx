import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
export const CartContext = createContext({
    
})

export const CartProvider = ({children} ) => {

    const [cart, setCart ] = useState([])
    const [quantity, setQuantity ] = useState(0)

    useEffect(() => {
        setQuantity(cart.reduce((accumulator, item) => accumulator + item.quantity, 0))
     }, [cart])  



    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        if(cart.length > 0){
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            
            setCart(cart => [...cart, {...item, quantity}])
           
        }else{
            const updatedCart = cart.map(i => i.id === item.id ? {...i, quantity: i.quantity = quantity} : {...i})
            setCart(updatedCart)
            
        }
    }


    const removeItem = (id) => {
        setCart(cart.filter(i => i.id !== id))
    }
    
    const clearCart = () => {
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.some(i => i.id === id)
    }

    const getTotalQuantity = () => {
        return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
    }
    const getTotalPrice = () => {
        return cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0)
    }
    return (    
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart,quantity, getTotalQuantity,getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )

    
    
}
CartProvider.propTypes = {
    children: PropTypes.node
}