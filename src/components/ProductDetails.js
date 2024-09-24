import { useParams } from "react-router-dom";
import { products } from "./assets";
import { useState } from "react";

const ProductDetails = ({ cart, setCart }) => {
    const { id } = useParams();
    const product = products.find((item) => item._id === id);
    const filteredItems = products
        .filter((item) => item.name === product.name && item._id !== product._id)
        .slice(0, 5);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);

    if (!product) {
        return <p className="font-bold justify-center">Product not Available</p>;
    }

    const handleImageChange = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.image.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.image.length) % product.image.length);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart");
            return;
        }

        console.log('Adding to cart:', product);
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item._id === product._id && item.size === selectedSize);
            if (existingProduct) {
                console.log('Product already in cart:', existingProduct);
                return prevCart.map((item) =>
                    item._id === product._id && item.size === selectedSize
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            console.log('Adding new product:', product);
            return [...prevCart, { ...product, quantity: 1, size: selectedSize }];
        });
        sessionStorage.setItem("cart", JSON.stringify(cart));
    };

    const { name, image, description, price, sizes } = product;

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 border-spacing-2 border-black mt-5">
                <div>
                    <img src={image[currentImageIndex]} alt={name} />
                    <div className="flex justify-center items-center">
                        <button onClick={handlePreviousImage}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgaUlP2fUD2PxqX5TbzFTRE9N_9RxE6_jnLZWEbG70NO89zXNZePUTkxp_dsnHVq8vm0&usqp=CAU" alt="left" className="w-5 h-auto mt-3 mx-1"/>



                        </button>
                        <button onClick={handleImageChange}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2Inp6Bf6tEzBMv1tYuMATjFVMfTv_OlqSvZ5FnG_ENiq3NcyS3gg3eieNCyhiVOI2Bs&usqp=CAU" alt="right" className="w-5 h-auto mt-3 mx-1"/>

                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">{name}</h1>
                    <p className="font-bold text-2xl mt-4">${price}</p>
                    <p className="font-bold mt-4">SELECT SIZE</p>
                    <div className="flex gap-3 mt-2">
                        {sizes.map((element) => (
                            <button
                                key={element}
                                className={`p-3 w-10 bg-slate-200 ${selectedSize === element ? 'border-2 border-black' : ''}`}
                                onClick={() => setSelectedSize(element)}
                            >
                                {element}
                            </button>
                        ))}
                    </div>
                    <p className="mt-7 text-gray-500">{description}</p>
                    <button
                        className="bg-black text-white px-3 py-3 text-sm mt-5"
                        onClick={handleAddToCart}
                    >
                        ADD TO CART
                    </button>
                    <p className="mt-7 text-gray-500">
                        100% Original product <br />
                        Cash on delivery is available on this product<br />
                        Easy return and exchange policy within 7 days.
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-gray-700 justify-center text-center mt-28">RELATED PRODUCTS____</h1>
                <div className="grid grid-cols-5 gap-4 mt-8">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((relatedProduct) => (
                            <div key={relatedProduct._id} className="border p-4">
                                <img src={relatedProduct.image[0]} alt={relatedProduct.name} className="w-full h-60 object-cover" />
                                <h2 className="font-bold mt-2">{relatedProduct.name}</h2>
                                <p className="text-gray-600">${relatedProduct.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center">No related products available</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;
