const OrderPlaced = ({ cart }) => {
    return (
      <div>
        <h1 className="text-2xl font-bold">Order Placed Successfully!</h1>
        <p className="text-lg">Thank you for your order. Here are the details of the items you purchased:</p>
  
        <div className="mt-8">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b p-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button className="bg-blue-500 text-white py-1 px-3 rounded">Track Order</button>
              </div>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default OrderPlaced;
  