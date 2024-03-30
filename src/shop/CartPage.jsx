
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';



export const CartPage = () => {
    const [cartItems, setcartItems] = useState([]);
    

    useEffect(() => {
        //fetch cart item
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);

    }, [])

    //calculate total price
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }
    //handle quantity increase
    const handleIncrease = (item) => {
        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
        setcartItems(updatedCartItems);

        //update local storage with new cart item
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    }

    //handle quantity decrease
    const handleDecrease = (item) => {
        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        setcartItems(updatedCartItems);

        //update local storage with new cart item
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };
    //handleDelete
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        //update newcart
        setcartItems(updatedCart);
        updateLocalStorage(updatedCart)
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    //cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0
    )
      //order total
      const orderTotal = cartSubtotal;


    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

            <div className="shop-cart padding-tb" >
                <div className="container">
                    <div className="section-wrapper">
                        {/*cart top*/}
                        <div className='cart-top'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                {/*table body*/}
                                <tbody>
                                    {
                                        cartItems.map((item, i) => (
                                            <tr key={i}>
                                                <td className='product-item cat-product'>
                                                    <div className='p-thumb'>
                                                        <Link to="/shop">
                                                            <img src={item.img} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>${item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className='cart-plus-minus'>
                                                        <div className='dec qtybutton' onClick={() => handleDecrease(item)} >-</div>
                                                        <input type='text' className='cart-plus-minus-box' name="qtybutton" value={item.quantity} />
                                                        <div className='inc qtybutton' onClick={() => handleIncrease(item)} >+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>
                                                    ${calculateTotalPrice(item)}
                                                </td>
                                                <td className="cat-edit">
                                                    <a href='#' onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImgUrl} alt='' />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/*cart top end*/}
                        {/* card bottom*/}
                        <div className="cart-bottom">
                            {/*checkout box */}
                            <div className='cart-checkout-box'>
                                <form className='coupon' >
                                    <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon Code ....' />
                                    <input type='submit' value="Apply coupon" />
                                </form>

                                <form className='cart-checkout'>
                                    <input type='submit' value="Update Cart" />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>

                            </div>



                            {/*chechout box end */}
                            {/* shopping box */}
                            <div className='shiping-box'>
                                <div className="row">
                                    <div className='col-md-6 col-12'>
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="usa">United States</option>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="india">India</option>
                                                    <option value="australia">Australia</option>
                                                    <option value="pakistan">Pakistan</option>
                                                    <option value="bangladesh">Bangladesh</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="chicago">Chicago</option>
                                                    <option value="newyork">NewYork</option>
                                                    <option value="boston">Boston</option>
                                                    <option value="michighan">Michigan</option>
                                                    <option value="la">Los Angeles</option>
                                                    <option value="hs">Houston</option>
                                                    <option value="ph">Phoenix</option>
                                                    <option value="as">Austin</option>
                                                    <option value="lnd">Indianapolis</option>
                                                    <option value="ph">Philadelphia</option>
                                                    <option value="dl">Dallas</option>
                                                    <option value="sf">San Francisco</option>
                                                    <option value="london">London</option>
                                                    <option value="manchester">Manchester</option>
                                                    <option value="bolton">Bolton</option>
                                                    <option value="delhi">Delhi</option>
                                                    <option value="mumbai">Mumbai</option>
                                                    <option value="chenai">Chennai</option>
                                                    <option value="kolkata">Kolkatta</option>
                                                    <option value="lucknow">Lucknow</option>
                                                    <option value="lahore">Lahore</option>
                                                    <option value="karachi">Karachi</option>
                                                    <option value="peshawar">Peshawar</option>
                                                    <option value="islamabad">Islamabad</option>
                                                    <option value="sydney">Sydney</option>
                                                    <option value="melbourn">Melbourn</option>
                                                    <option value="perth">Perth</option>
                                                    <option value="dhaka">Dhaka</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input className='cart-page-input-text' type='text' name='postalCode' id="postalCode" placeholder='PostalCode/ZipCode *' />
                                            <button type='submit'>Update Total</button>
                                        </div>

                                    </div>
                                    <div className='col-md-6 col-12'>
                                        <div className="cart-overview">
                                            <h3>Cart Total</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>
                                                        Cart Subtotal
                                                    </span>
                                                    <p className='pull-right'>${cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>
                                                        Shipping and Handeling
                                                    </span>
                                                    <p className='pull-right'>Free Shipping In Usa</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>
                                                        Order Total
                                                    </span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>

                                            </ul>
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

export default CartPage;