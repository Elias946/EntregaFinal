
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Shop Cacke</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Smartphones">Smartphones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Laptops">Laptops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Sunglasses">Sunglasses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Abaut">Abaut</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Cart">
              <i className="bi bi-cart4"> </i>
                <CartWidget/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
