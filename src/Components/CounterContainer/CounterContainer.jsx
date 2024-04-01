import { useState } from "react"




// eslint-disable-next-line react/prop-types
const CounterContainer = ({initial, stock, onAdd}) => {
       
    const [count, setCount] = useState(initial)

    const inc = () =>{
       if(count < stock){
            setCount(count + 1)
       }
    }

    const dec = () =>{
        if (count > 1){
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        // Invoca la función onAdd pasando el count actual como argumento
        onAdd(count);
    };
    return(
        <>
           <div className="btn-group">
           <button  className="btn btn-outline-info " onClick ={dec} > - </button >
            <h4 className="m-2">
                   {count}   
            </h4>
            <button  className="btn btn-outline-info " onClick={inc} disabled={stock < count}>+</button >
            
           </div>
           <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={handleAddToCart}>Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
           </>
    )

} 

export default CounterContainer