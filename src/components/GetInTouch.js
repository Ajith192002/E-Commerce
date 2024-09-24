const GetInTouch = () => {
    return (
        <div>
            <div className="flex justify-between mt-16 mb-8" >
            <div className="max-w-48">
                <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" className="w-32 h-24"/>
                <p>Lorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <h2 className="font-bold">Company</h2>
                <p>About Us</p>
                <p>Privacy</p>
                <p>Delivery</p>
            </div>

            <div>
                <h2 className="font-bold">Get in Touch</h2>
                <p>+1 203-505-476</p>
                <p>contact@ecommerce</p>
            </div>
            
            </div>
            <p className="text-center">copy right @Ecommerce-All rights reserved</p>
        </div>
    )
}

export default GetInTouch;