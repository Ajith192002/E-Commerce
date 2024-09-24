const Arrivals = () => {
    return (
        <div className="grid grid-cols-2 gap-2 mt-6 border-blue-200 border-2 md:mt-20 sm:mt-20">
            <div className="text-center pt-36">
                        <p>____ OUR BEST SELLERS</p>
                        <p className="font-bold text-4xl">Latest Arrivals</p>
                        <p className="mt-2">SHOP NOW____</p>
            </div>

            <div className="w-full h-full">
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/hero_img.png`} 
                            alt="hero-img" 
                            className="w-full h-full"
                        />
            </div>
        </div>


        

    
    );

    
};

export default Arrivals;
