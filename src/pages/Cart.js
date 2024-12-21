import { CartItem } from "../components";
import { useTitle } from "../Hooks/useTitle";

import img1 from "../assets/images/1001.png";
import img2 from "../assets/images/1002.png";


export const Cart = ({title}) => {

  useTitle(title);

  return (
        <main>
          <section className="max-w-7xl text-center mx-auto pt-24">
            <div className="flex flex-col w-full items-center">
              <h1 className="text-3xl font-bold">Cart Items: 2</h1>
            </div>
          </section>
          <section className="max-w-7xl mx-auto py-12">
            <div className="flex flex-col justify-start flex-wrap other:justify-evenly ">              
              <CartItem price="149" imgx={img1} productName="Sony Wh-Ch510 Bluetooth Wireless" />
              <p className="my-4"></p>
              <CartItem price="49" imgx={img2} productName="boAt Rockerz 450"/>              
            </div>
          </section>
        </main>
  )
}
