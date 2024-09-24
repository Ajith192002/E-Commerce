import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ cart }) => {
  const SHIPPING_FEE = 100;
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + SHIPPING_FEE;

  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNavigation = () => {
    navigate("/orderplaced"); 
  };

  return (
    <div className="flex gap-4 mt-9">
      {/* Delivery Information */}
      <div className="border border-gray-500 p-9 w-1/2">
        <h1 className="font-bold text-2xl">DELIVERY INFORMATION</h1>
        <div>
          <div className="flex gap-4 mt-9">
            <input className="border border-black p-1" type="text" placeholder="First name" />
            <input className="border border-black p-1" type="text" placeholder="Last name" />
          </div>
          <input className="border border-black mt-5 w-full p-1" type="text" placeholder="Email Address" />
        </div>
        <div className="flex gap-4 mt-5">
          <input className="border border-black p-1" type="text" placeholder="City" />
          <input className="border border-black p-1" type="text" placeholder="Street" />
        </div>
        <div className="flex gap-4 mt-5">
          <input className="border border-black p-1" type="text" placeholder="Zip-Code" />
          <input className="border border-black p-1" type="text" placeholder="Country" />
        </div>
      </div>

      {/* Cart Total */}
      <div className="p-9 w-1/2">
        <div className="border-t p-4">
          <h3 className="text-lg font-bold mb-6">CART TOTAL</h3>
          <div className="flex justify-between w-full">
            <p className="font-semibold">Subtotal:</p>
            <p className="mx-6">₹{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Shipping Fee:</p>
            <p className="mx-6">₹{SHIPPING_FEE.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold text-xl mt-4">
            <p>Total:</p>
            <p className="mx-6">₹{total.toFixed(2)}</p>
          </div>
        </div>

        {/* Payment Method */}
        <h2 className="font-semibold mb-5">CHOOSE A PAYMENT METHOD</h2>
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Option 1 */}
          <label
            className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
              selectedOption === "option1" ? "bg-green-100" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="option1"
              className="hidden"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <div className="w-5 h-5 border rounded-full flex items-center justify-center">
              <div className={`w-full h-full ${selectedOption === "option1" ? "bg-green-400" : ""}`}></div>
            </div>
            <img className="h-5 mx-4" src={`${process.env.PUBLIC_URL}/assets/stripe_logo.png`} alt="Option 1" />
          </label>

          {/* Option 2 */}
          <label
            className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
              selectedOption === "option2" ? "bg-green-100" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="option2"
              className="hidden"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <div className="w-5 h-5 border rounded-full flex items-center justify-center">
              <div className={`w-full h-full ${selectedOption === "option2" ? "bg-green-400" : ""}`}></div>
            </div>
            <img className="h-5 mx-4" src={`${process.env.PUBLIC_URL}/assets/razorpay_logo.png`} alt="Option 2" />
          </label>

          {/* Option 3 */}
          <label
            className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
              selectedOption === "option3" ? "bg-green-100" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="option3"
              className="hidden"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <div className="w-5 h-5 border rounded-full flex items-center justify-center">
              <div className={`w-full h-full ${selectedOption === "option3" ? "bg-green-400" : ""}`}></div>
            </div>
            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
          </label>
        </div>

        {/* Place Order Button */}
        <button
          className="bg-black text-white p-2 mt-5 justify-between items-center rounded-lg text-sm w-full"
          onClick={handleNavigation}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
