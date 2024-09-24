const About = () => {
    return (
        <div>
            <h1 className="justify-center text-center text-3xl mt-8">ABOUT US____</h1>
            <div>
            <div className="grid grid-cols-2 mt-20">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/about_img.png`} alt="about_img" className="w-3/4 h-auto"/>
                    
                </div>

                <div className=" mt-14 flex flex-col justify-between text-gray-600">
                    <div>
                        <p>Forever was born out of a passion for innovation and a desire to 
                            revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform
                            where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.

                        </p>
                        <p className="mt-12">
                            Since our inception, we've worked tirelessly to curate a diverse selection of
                            high-quality products that cater to every taste and preference. From fashion and beauty to electronics
                            and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.


                        </p>
                        <h2 className="font-semibold mt-6 text-black">Our Mission</h2>
                        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence.
                            We're dedicated to providing a seamless shopping experience that exceeds expectations,
                            from browsing and ordering to delivery and beyond.
                        </p>
                    </div>

                    
                </div>

            </div>
        </div>
        </div>
    )
}

export default About;