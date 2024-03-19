import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png' 
import { ShopContext } from "../../context/ShopContext";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div tabindex="1">S</div>
                        <div tabindex="2">M</div>
                        <div tabindex="3">L</div>
                        <div tabindex="4">XL</div>
                    </div>
                </div>
                <Popup trigger={<button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>} position="right center" modal nested>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> Modal Title </div>
                        <div className="content">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                        </div>
                        <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                            close();
                            }}
                        >
                            close modal
                        </button>
                        </div>
                    </div>
                )}
                </Popup>
                <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay