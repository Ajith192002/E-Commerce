import { Link } from 'react-router-dom';
import {products} from './assets'


export const LatestCollection = () => {

    console.log(products);

    const topProducts = products.slice(0,10);

    console.log(topProducts);


    return(
        <div className="md:mt-20 sm:mt-20" >
            <div>
                <p className="text-black text-4xl text-center mt-9">LATEST COLLECTIONS____</p>
                <p className="text-black text-center mt-9 mb-4">These are the latest collections that are trendsetting across the globe</p>

            </div>

            <div className="grid grid-cols-5 grid-rows-2 gap-4">
                {topProducts.map((product) => (
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image[0]} alt={product.name}/>
                        </Link>
                        <p className="text-sm">{product.name}</p>
                        <p className='font-bold'> ${product.price}</p>
                        
                    </div>

                    
                ))}
            </div>

        </div>
    )
}

export default LatestCollection;