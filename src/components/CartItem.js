

export const CartItem = ({price, imgx, productName}) => {
  return (
        <div className="w-full text-start flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <span>
                    <img className="p-2 rounded-2xl h-32 object-cover" src={imgx} alt="product" />
                </span>
            </div>

            <div className="text-right">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
            </div>

            <div className="text-right">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            </div>

            <div className="px-5">                                  
                <span className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove</span>
            </div>

        </div>
  )
}
