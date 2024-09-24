import { Link } from "react-router-dom";
import { products } from "./assets";

const BestSeller = () => {

    const bestSellers = products.filter((product) => product.bestseller === true).slice(0,5);
    console.log(bestSellers);



    return(
        <div>
            <div>
                <p className="text-black text-4xl text-center mt-9">BEST SELLERS____</p>
                <p className="text-black text-center mt-9 mb-4">These are the latest collections that are trendsetting across the globe</p>

            </div>
            <div className="grid grid-cols-5 grid-rows-1 gap-4">

                
                {bestSellers.map((product) => (
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image[0]} alt={product.name}/>
                        </Link>
                        <p className="text-sm">{product.name}</p>
                        <p className="font-bold">${product.price}</p>

                    </div>
                    

                ))}

            </div>

            
            
        </div>
    )
}

export default BestSeller;