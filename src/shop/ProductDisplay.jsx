import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';

const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingsCount, quantity, img , desc} = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };
    const handleDecrease = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1)
        }

    }
    const handleIncrease = () => {
        setQuantity(prequantity + 1)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }
        //console.log(product)

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        }
        else {
            existingCart.push(product);
        }
        //update local storage

        localStorage.setItem("cart", JSON.stringify(existingCart));
        //reset form filled
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color")
        setCoupon("")
    }
    
    return (
        <div className="product-display mb-3">
            <div className="product-details">
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p> {desc}</p>
            </div>
           
            <div className="product-options">
                <form onSubmit={handleSubmit}>
                {item.size && (
                    <div className='select-product size'>
                        <select value={size} onChange={handleSizeChange}>
                            <option>Select Size</option>
                            {item.size.map((option, i) =>
                            <option key={i}>{option}</option>
                           ) }
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div> )}
                    <div className='select-product color'>
                        <select value={color} onChange={handleColorChange}>
                            <option>Select Color</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Blue</option>
                            <option>Red</option>
                            <option>Gray</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* cart plus minus */}
                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type='text' name='qtybutton' id="qtybutton" value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>
                    {/*copuon */}

                    <div className="discoubt-code mb-2">
                        <input type='text' placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
                    </div>

                    {/*button*/}
                    
                    <button type='submit' className='lab-btn mt-3'>
                        <span>Add To Cart</span>
                    </button>
                   
                    <Link to="/cart-page" className='lab-btn bg-primary mt-3 ml-5'>
                        <span>Checkout</span>
                    </Link>
             
                 
                </form>
            </div>
        </div>
    );
};

export default ProductDisplay;