import Navbar from "./Components/NavBar/Navbar";
import '../public/css.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Product from "./Components/Product/Product";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
const App = () => {


    
  //console.log(JSON.parse(localStorage.getItem('cart')))


  return (
    <div>
      
      <Router>
       <CartProvider>
        {<Navbar />}
          <div className="container">
            <div className="row d-flex justify-content-center min-vh-100">
              <Routes>
                <Route path="/Laptops/" element={<ItemListContainer />} />
                <Route path="/Sunglasses/" element={<ItemListContainer />} />
                <Route path="/Smartphones/" element={<ItemListContainer />} />
                <Route path="/Products/:ProductId" element={<Product />} />
                <Route path="/Cart" element={<Cart/>}/>
                <Route exact path="/" element={<ItemListContainer />}></Route>
                <Route exact path="*" element={<img className="not_found" src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" />}></Route>

              </Routes>
            </div>
          </div>
       </CartProvider>
      </Router>


    </div>
  )
}
export default App;