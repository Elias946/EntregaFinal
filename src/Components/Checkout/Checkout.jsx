import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import FormCheckout from "../FormCheckout/FormCheckout"
const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getTotalQuantity, getTotalPrice, clearCart } = useContext(CartContext)
    const [orderAddedID , setOrderAddedID] = useState('')
    const totalQuantity  = getTotalQuantity()
    const totalPrice = getTotalPrice()
    

    const createOrder = async (formData) => {
    setLoading(true);
    try {
        const ids = cart.map(prod => prod.id);

        const objOrder = {
            buyer: {
                email: formData.email,
                name: formData.name,
                phone: formData.phone,
                address: formData.address,
            },
            items: ids,
            totalQuantity,
            totalPrice,
            date: new Date()
        };

        const productRef = collection(db, "products");

        const ProductAddedFromFireStore = await getDocs(
            query(
                productRef, where(
                    documentId(), "in", ids
                )
            )
        );

        const { docs } = ProductAddedFromFireStore;

        const outOfStock = [];
        const batch = writeBatch(db);

        docs.forEach((doc) => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;

            const ProductAddedToCart = cart.find((prod) => prod.id === doc.id);
            const prodQuantity = ProductAddedToCart?.quantity;

            if (stockDb >= prodQuantity) {
                //update
                batch.update(doc.ref, { stock: stockDb - prodQuantity });
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc });
            }
        });

        if (outOfStock.length === 0) {
            await batch.commit();
            const orderRef = collection(db, "orders");

            const orderAdded = await addDoc(orderRef, objOrder);
            setOrderAddedID(orderAdded.id);
            setOrderCreated(true); // Actualizar el estado aquí
            clearCart();
        } else {
            alert("Hay productos que están fuera de stock");
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
};


if (orderCreated) {
    return <h1>La orden fue creada correctamente su id es {orderAddedID}</h1>
}
    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            <h1>Checkout</h1>
            <FormCheckout onSubmit={createOrder} />
        </div>
    )
}
export default Checkout