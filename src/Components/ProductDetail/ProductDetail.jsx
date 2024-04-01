import {  useState } from 'react'
import CounterContainer from '../CounterContainer/CounterContainer'
import PropTypes from 'prop-types';
const ProductDetail = ({product, AddProduct}) => {
    
    const [mainImg, setImg] = useState( )
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <h1 className="text-center">{product.title + product.brand}</h1>
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="thumbnail-container text-center">

                                        <div className="thumbnail main-image">

                                            <img className="main-mig" src={!mainImg ? product.thumbnail : mainImg} />
                                        </div>
                                        <div className="thumbnail">
                                            {

                                                product.images && product.images.length > 0 && product.images.map((image, index) => (
                                                    <button onClick={() => setImg(image)} key={index}>
                                                        <img className="mt-4" src={image} width="70" alt={`Product Image ${index}`} />
                                                    </button>
                                                ))

                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 " >
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            {/* Todo Link Category */}
                                            <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Category: {product.category}</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{product.brand}</span>
                                            <h5 className="text-uppercase">{product.title}</h5>
                                            <div className="price d-flex flex-row align-items-center"> <span className="act-price">${product.price}</span></div>
                                        </div>
                                        <p className="about">{product.description}</p>
                                        <div className="sizes mt-5">
                                            <h6 className="text-uppercase">Quantity: {product.stock}</h6>
                                            <CounterContainer initial={product.quantity} stock={product.stock} onAdd={AddProduct}/>
                                            
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


ProductDetail.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
    AddProduct: PropTypes.func.isRequired
};
export default ProductDetail