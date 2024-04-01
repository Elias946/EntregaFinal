import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { CartContext } from "../../Context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../../services/firebase'
const Product = () => {

    const { addItem} = useContext(CartContext)
    const { ProductId } = useParams();

    const [Product, setProducts] = useState()
    const { cart } = useContext(CartContext)
   
   
    useEffect(() => {
       getDoc(doc(db, 'products', ProductId)).then((res) => {
           const product = {id: res.id, ...res.data()}

            const ProductIsInCart = cart.find(product => product.id === res.id)
            if(ProductIsInCart){
                product.quantity = ProductIsInCart.quantity
            }else{
                product.quantity = 1
            }

           setProducts(product)
       })

    }, [ProductId])
    


    const handleAddProduct = () => {

        return (count) => {
         
            addItem(Product, count)
         
        }
    };
    
    return (
        // pregunto si el objeto no es nulo o no termino de cargar desde la api si ya cargo lo muesto mientras muestro el loading
        <>  
           
           {Product ? <ProductDetail product={Product} AddProduct={handleAddProduct()} /> : <h1>Loading...</h1>}
        </>
    )
}
export default Product;