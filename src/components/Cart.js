import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {

    const navigate = useNavigate();
    const SHIPPING_FEE = 100; // Define your shipping fee

    // Calculate the subtotal (sum of all items' price * quantity)
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Calculate the total (subtotal + shipping fee)
    const total = subtotal + SHIPPING_FEE;

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="container mx-auto p-4 mt-8">
            <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
            {cart.length > 0 ? (
                <div>
                    {cart.map((cartItem) => (
                        <div key={cartItem._id} className="flex items-center border p-4 mt-4">
                            <img
                                src={cartItem.image[0]} 
                                alt={cartItem.name}
                                className="w-20 h-20 object-cover"
                            />
                            <div className="ml-4">
                                <h3 className="font-bold">{cartItem.name}</h3>
                                <p>₹{cartItem.price}</p>
                                <p>Size: {cartItem.size}</p> {/* Display selected size */}
                                <p>Quantity: {cartItem.quantity}</p>
                            </div>
                        </div>
                    ))}
                    {/* Cart Summary */}
                    <div className="mt-8 border-t pt-4 text-right">
                        <h3 className="text-lg font-bold mb-2">CART TOTAL</h3>
                        <div className="flex justify-between">
                            <p>Subtotal:</p>
                            <p>₹{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping Fee:</p>
                            <p>₹{SHIPPING_FEE.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between font-bold text-xl mt-4">
                            <p>Total:</p>
                            <p>₹{total.toFixed(2)}</p>
                        </div>
                        <button className="bg-black text-white px-4 py-2 mt-6" onClick={()=> handleNavigation("/checkout")}>
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-600 text-center">No items in cart</p>
            )}
        </div>
    );
};

export default Cart;
