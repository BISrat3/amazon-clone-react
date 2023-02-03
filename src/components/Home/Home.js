import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* {Product} */}
          <Product
            id="1238483"
            title="The Power of Vision"
            price={15}
            image="https://g.christianbook.com/dg/product/cbd/f400/9113715.jpg"
            rating={5}
          />
          <Product
            id="123843"
            title="Amzpas Bands Compatible"
            price={11}
            image="https://m.media-amazon.com/images/I/81KOiDR8RKL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="123843"
            title="Apple iPad Pro 9.7 32GB Wi-Fi - Roségold"
            price={263}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-xNDUDlbNUg3GWUqjnZLIHivv9tqHtV5mVFpcfrcEWdHI56fjfrQq2HO984GobfnRQg&usqp=CAU"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3212483"
            title="Tianke 500GB Hard Drive Disk HDD for Xbox 360 Slim Games Console"
            price={36}
            image="https://m.media-amazon.com/images/I/317-3pw4qEL._AC_.jpg"
            rating={4}
          />
          <Product
            id="1211483"
            title="HP Pavilion 17.3 FHD IPS Laptop Newest 2022, 11th Gen Intel Core i5-1135G7(up to 4.2 GHz), 16GB DDR4 RAM, 1TB PCIe SSD, Wi-Fi 5, Bluetooth, Windows 11, Silver, w/ 3in1 Accessories"
            price={659}
            image="https://m.media-amazon.com/images/I/71GpmCe7wjL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="1238324"
            title="Digital Cameras for Photography, 4K 48MP Vlogging Camera 16X Digital Zoom Manual Focus Rechargeable Students Compact Camera with 52mm Wide-Angle Lens & Macro Lens, 32G Micro Card and 2 Batteries"
            price={119}
            image="https://m.media-amazon.com/images/I/71zTX1iQWSL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1233221"
            title="Amazon Fire TV 50 4-Series 4K UHD smart TV, stream live TV without cable"
            price={319}
            image="https://m.media-amazon.com/images/I/61IZcaEIt4L._AC_SX569_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
