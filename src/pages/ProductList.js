import { Card } from "../components/Card";
import { useTitle } from "../Hooks/useTitle";

import img1 from "../assets/images/1001.png";
import img2 from "../assets/images/1002.png";
import img3 from "../assets/images/1003.png";
import img4 from "../assets/images/1004.png";
import img5 from "../assets/images/1005.png";
import img6 from "../assets/images/1006.png";

export const ProductList = ({title}) => {

    useTitle(title);
    
    return (
        <main>
          <section className="max-w-7xl mx-auto py-16">
            <div className="flex justify-start flex-wrap other:justify-evenly ">
              
              <Card price="149" imgx={img1} productName="Sony Wh-Ch510 Bluetooth Wireless" />
              <Card price="49" imgx={img2} productName="boAt Rockerz 450"/>
              <Card price="179" imgx={img3} productName="JBL Tune 760NC"/>
              <Card price="39" imgx={img4} productName="Logitech H111 Wired"/>
              <Card price="199" imgx={img5} productName="APPLE Airpods Max Bluetooth Headset"/>
              <Card price="29" imgx={img6} productName="ZEBRONICS Zeb-Thunder Wired"/>
            </div>
          </section>
        </main>
    )
}