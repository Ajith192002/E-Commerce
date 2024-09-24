import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./assets";

const Collections = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");  // State to store search term
    const [sortOption, setSortOption] = useState("default");  // State to store selected sort option

    // Function to handle category checkbox changes
    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories([...selectedCategories, value]);
        } else {
            setSelectedCategories(selectedCategories.filter((category) => category !== value));
        }
    };

    // Function to handle type checkbox changes
    const handleTypesChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedTypes([...selectedTypes, value]);
        } else {
            setSelectedTypes(selectedTypes.filter((type) => type !== value));
        }
    };

    // Function to handle search input changes
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Function to handle sort option changes
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Filter and sort products based on selected categories, types, search term, and sort option
    const filteredProducts = products
        .filter((product) => {
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.subCategory);
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                  product.category.toLowerCase().includes(searchTerm) ||
                                  product.subCategory.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesType && matchesSearch;
        })
        .sort((a, b) => {
            if (sortOption === "lowtohigh") {
                return a.price - b.price; // Sort by price low to high
            }
            if (sortOption === "hightolow") {
                return b.price - a.price; // Sort by price high to low
            }
            return 0; // Default sort (no sorting)
        });

    return (
        <div>
            <div className="flex justify-center items-center mt-14 mb-6">
                <input
                    className="w-1/2 h-10 border border-black rounded-lg"
                    type="text"
                    placeholder="Search here"
                    onChange={handleSearchChange}
                />
                <button className="text-white bg-black w-32 h-10 rounded-lg">Search</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
                <div className="w-60">
                    <p className="text-xl">FILTERS</p>

                    {/* Categories */}
                    <div className="border border-gray-400 pl-5 py-3 mt-5">
                        <p className="font-bold text-sm">CATEGORIES</p>
                        <div className="text-sm pt-2">
                            <p className="pt-2">
                                <input type="checkbox" value="Men" onChange={handleCategoryChange} /> Men
                            </p>
                            <p className="pt-2">
                                <input type="checkbox" value="Women" onChange={handleCategoryChange} /> Women
                            </p>
                            <p className="pt-2">
                                <input type="checkbox" value="Kids" onChange={handleCategoryChange} /> Kids
                            </p>
                        </div>
                    </div>

                    {/* Types */}
                    <div className="border border-gray-400 pl-5 py-3 mt-5">
                        <p className="font-bold text-sm">TYPES</p>
                        <div className="text-sm pt-2">
                            <p className="pt-2">
                                <input type="checkbox" value="Topwear" onChange={handleTypesChange} /> Topwear
                            </p>
                            <p className="pt-2">
                                <input type="checkbox" value="Bottomwear" onChange={handleTypesChange} /> Bottomwear
                            </p>
                            <p className="pt-2">
                                <input type="checkbox" value="Winterwear" onChange={handleTypesChange} /> Winterwear
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between">
                       <h1 className="text-3xl justify-center text-center">ALL COLLECTIONS____</h1>
                       <form>
                          <p className="mx-4 font-bold">SORT</p>
                          <select onChange={handleSortChange}>
                            <option value="default">default</option>
                            <option value="lowtohigh">Price: low-high</option>
                            <option value="hightolow">Price: high-low</option>
                          </select>
                       </form>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mt-5">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product._id} className="mt-4">
                                    <Link to={`/product/${product._id}`}>
                                        <img src={product.image[0]} alt={product.name} />
                                    </Link>
                                    <p className="text-sm text-gray-600 mt-2">{product.name}</p>
                                    <p className="font-bold">${product.price}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No products found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;
