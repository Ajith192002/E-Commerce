const LastBar = () => {
    return (
        <div className="flex  mt-12 justify-between">
            <div className="h-12 w-23 flex-col items-center text-center">
                <img 
                   src={`${process.env.PUBLIC_URL}/assets/exchange_icon.png`}
                   alt="exchange_icon"
                   className="w-14 h-14 mx-auto"
                />
                <p className="font-bold items-center">Easy Exchange Policy</p>
                <p className="text-gray-500">we offer hassle free exchange policy</p>

            </div>

            <div className="items-center text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/quality_icon.png`}
                  alt="quality-icon"
                  className="w-14 h-14 mx-auto"
                />
                <p className="font-bold">7 days Return Policy</p>
                <p className="text-gray-500">we provide 7 days free return policy</p>
            </div>

            <div className="items-center text-center">
                <img 
                   src={`${process.env.PUBLIC_URL}/assets/quality_icon.png`}
                   alt="quality-icon"
                   className="w-14 h-14 mx-auto"
                />
                <p className="font-bold">Best Customer support</p>
                <p className="text-gray-500">we provide 24/7 customer support</p>
            </div>
        </div>
        
    )
}

export default LastBar;