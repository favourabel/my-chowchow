import React from 'react'

 import { Link } from "react-router-dom";


import NigeriaFlag from "../assets/NigeriaFlag.svg";
import shopping from "../assets/shopping.png";
import menu from "../assets/menu.png";
import star from "../assets/star.svg";
import bikeright from "../assets/bike-right.svg";
import engineer from "../assets/engineer.jpg";
import novastar from "../assets/novastar.jpg";
import aaic from "../assets/aaic.jpg";
import yc from "../assets/yc.png";
import hoaq from "../assets/hoaq-img.png";
import discipline from "../assets/discipline.webp";
import ownership from "../assets/ownership.webp";
import integrity from "../assets/integrity.webp";
import Promocode from "../assets/Promo-code.svg";
import plastic from "../assets/plastic.svg";
import hand from "../assets/hand.webp";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Companypage = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#FFEDB3" }} className="flex-col md:flex-row">

  <Navbar/>

  <h1 className="text-center mt-[60px] text-[75px] font-bold">
    Delivering Happiness
  </h1>

  <img src={bikeright} className="w-[140px] mt-[90px] ml-[9%]" />

</div>


<div className="flex-col md:flex-row border-[3px] rounded-[10px]">

  <div className="flex flex-col md:flex-row gap-[50px] max-w-[90%] m-auto">

    <div className="p-[20px] border-r-[3px]">
      <p className="text-[20px] font-bold bg-green-500 p-[16px] text-white rounded-[8px] max-w-[100%]">
        Founders story
      </p>

      <img src={engineer} className="w-[300px] mt-[50px]" />

      <p className="font-bold text-center mt-[30px] text-[17px]">
        Babafemi Aluko
      </p>

      <p className="text-green-500 mt-[6px] text-center text-[17px]">
        CEO/CO-FOUNDER
      </p>
    </div>

    <div className="ml-[5%]">
      <p className="mt-[10px]">
        I tested positive for COVID on the 31st of December, 2020. The result<br />
        came in very late at night and I couldnt travel home. I spent the entire<br />
        January 1 looking for food vendors to deliver food to me but the available<br />
        food delivery providers didnt deliver during public holidays. I eventually<br />
        found one after so many hours and ended up paying 4x the regular<br />
        amount.
      </p>
    </div>

  </div>

  <p className="text-center mt-[50px] font-bold border-t-[3px]">
    BACKED BY
  </p>

  <div className="flex-col md:flex-row flex mt-[40px] gap-[30px] justify-center mb-[50px]">
    <img src={novastar} className="w-[90px]" />
    <img src={aaic} className="w-[90px]" />
    <img src={yc} className="w-[90px]" />
    <img src={hoaq} className="w-[70px]" />
  </div>

</div>


<div className="flex gap-[5px] ml-[50px]">
  <p className="font-bold text-[60px]">Core Values</p>
  <p className="mt-[50px] text-purple-500">What keeps us grounded</p>
</div>


<div className="flex-col md:flex-row flex mt-[60px] items-center gap-[10px] ml-[20px]">
  <img src={discipline} className="w-[250px]" />
  <img src={ownership} className="w-[250px]" />
  <img src={ownership} className="w-[250px]" />
  <img src={integrity} className="w-[250px]" />
</div>


<div className="flex-col md:flex-row flex mt-[40px] pb-[40px] rounded-[10px] gap-[10%]" style={{ backgroundColor: "#0C513F" }}>

  <div className="ml-[5%]">
    <p className="text-white text-[50px] mt-[90px]">TEAM</p>

    <div className="flex gap-[10px]">
      <p className="mt-[50px] text-white">01</p>
      <p className="font-bold text-[40px] text-white mt-[30px]">Growth</p>
    </div>

    <div className="flex gap-[10px]">
      <p className="mt-[50px] text-white">02</p>
      <p className="font-bold text-[40px] text-white mt-[30px]">Business</p>
    </div>

    <div className="flex gap-[10px]">
      <p className="mt-[50px] text-white">03</p>
      <p className="font-bold text-[40px] text-white mt-[30px]">Broduct&Engineering</p>
    </div>

    <div className="flex gap-[10px]">
      <p className="mt-[30px] text-white">04</p>
      <p className="font-bold text-[40px] text-white mt-[10px]">operations</p>
    </div>

  </div>


  <div>
    <p className="text-[50px] text-white mt-[90px]">FOCUS.</p>

    <div
      style={{ backgroundColor: "#FFEDB3" }}
      className="pt-[20px] pl-[20px] pb-[50px] rounded-[17px] p-[30px] mt-[50px]"
    >
      <p className="text-[20px]">
        Chowdeck wallet is a safe feature on the<br />
        app where you can put in money for later<br />
        use. The money in the Chowdeck wallet<br />
        can be used to make payments for<br />
        orders placed on the app. When an order<br />
        gets rejected due to various reasons,<br />
        the payment made initially when the order<br />
        was placed automatically goes into your<br />
        Chowdeck wallet which is accessible to<br />
        make payments for future orders. You<br />
        can always request a withdrawal to your<br />
        local accounts
      </p>
    </div>

  </div>

</div>

    <div className="text-black">

  <p className="mt-[40px] font-bold text-[60px] ml-[30px]">people</p>
      
  <div className="flex flex-col md:flex-row gap-[13%] items-center">

    <div className="flex-col md:flex-row">
       <img src={engineer} className="w-[400px] rounded-[10px] ml-[15%] mt-[30px] border-[3px]" />
    </div>

    <div className="flex-col md:flex-row mt-[20px] text-center">

      <div className="flex-col md:flex-row flex mt-[40px] gap-[97%]">
        <p className="text-[40px]">Femi</p>
        <p className="text-[17px] mt-[20px]">ANYWORK</p>
      </div>

      <div className="flex-col md:flex-row flex mt-[40px] gap-[70%]">
        <p className="text-[40px]">olumide</p>
        <p className="text-[17px] mt-[20px]">ENGINNERING</p>
      </div>

      <div className="flex-col md:flex-row flex mt-[40px] gap-[93%]">
        <p className="text-[40px]">Lanre</p>
        <p className="text-[17px] mt-[17px]">OPERATIONS</p>
      </div>

      <div className="flex-col md:flex-row flex mt-[40px] gap-[78%]">
        <p className="text-[40px]">Temilola</p>
        <p className="text-[17px] mt-[20px]">BUSINESS</p>
      </div>

      <div className="flex-col md:flex-row flex mt-[40px] gap-[90%]">
        <p className="text-[40px]">Amaka</p>
        <p className="text-[17px] mt-[20px]">GROWTH</p>
      </div>

    </div>

  </div>

  <div style={{ backgroundColor: "black" }} className="flex-col md:flex-row mt-[30px]">

    <div className="flex-col md:flex-row flex m-auto max-w-[90%] pt-[40px] rounded-[10px] border-[3px] gap-[13%]" style={{ backgroundColor: "white" }}>

      <div className="ml-[10%]">
        <p className="text-green-500 text-[60px] mt-[30px]">FAQS</p>
        <p className="mt-[30px] text-[19px]">what is chowdeck wallet?</p>
        <p className="mt-[30px] text-[19px]">what is service fee?</p>
        <p className="mt-[30px] text-[19px]">why do we charge service fee?</p>
        <p className="mt-[30px] text-[19px]">what is surge fee?</p>
        <p className="mt-[30px] text-[19px]">why do we charge surge fee?</p>
        <p className="mt-[30px] text-[19px]">how do i update my profle?</p>
      </div>

      <div>
        <p className="text-[60px] text-green-500 mt-[30px]">ANS</p>

        <div style={{ backgroundColor: "gold" }} className="pt-[20px] pl-[10px] mb-[40px] rounded-[10px] h-[400px]">
          <p className="text-[20px] text-white">
            Chowpass is a membership subscription<br />
            program for customers that offers free<br />
            deliveries, reduced service fees, and no<br />
            surge fees on orders from selected vendors.
          </p>
        </div>

      </div>

    </div>

    <div className="flex-col md:flex-row flex justify-center mt-[50px] pb-[40px] gap-[5%]">

      <div style={{ backgroundColor: "#0C513F" }} className="p-[60px] pl-[50px] rounded-[8px]">

        <p className="text-white text-[40px] mt-[10px]">
          Place your<br />
          orders in seconds
        </p>

        <button className="text-[17px] p-[10px] text-black mt-[30px] bg-white rounded-[10px]">
          Download on google playstore
        </button>

        <div>
          <button className="text-[17px] p-[10px] text-black mt-[10px] bg-white rounded-[10px]">
            Download on App Store
          </button>
        </div>

        <div className="flex mt-[80px]">
          <img src={Promocode} className="w-[80px] mt-[40%]" />
          <img src={plastic} className="w-[120px] ml-[40%]" />
        </div>

        <div>
          <button className="bg-[#FFC501] text-black p-[10px] rounded-[12px] border-[3px] cursor-pointer">
            CDNWEB
          </button>

          <p className="text-[13px] text-white mt-[30px]">
            Get <span className="text-[#FFC501]">₦300 off</span> your first order when you use<br />
            this promo code!
          </p>
        </div>

      </div>

      <div>
        <img src={hand} className="w-[450px] h-[900px]" />
      </div>

    </div>

    <div className="flex mt-[50px] gap-[20px]">
      <p className="text-white text-[40px] ml-[40px]">Cool stuff only</p>
      <p className="text-white text-[16px] mt-[30px] text-grey">Subscribe to our news latter</p>
    </div>

    <input
      type="text"
      placeholder="yourname@email.com"
      className="text-white w-[100%] mb-[40px] p-[60px] pt-[40px] pb-[40px] mt-[30px] border-t-[1px] border-b-[1px]"
    />

    <Footer/>
     </div>
     </div>
    </div>
  )
}

export default Companypage
