import React from "react";

import { Link } from "react-router-dom";


import NigeriaFlag from "../assets/NigeriaFlag.svg";
import shopping from "../assets/shopping.png";
import menu from "../assets/menu.png";
import deliverybag from "../assets/delivery-bag.svg";
import calculator from "../assets/calculator.svg";
import pas from "../assets/pas.svg";
import surge from "../assets/surge.svg";
import star from "../assets/star.svg";
import Promocode from "../assets/Promo-code.svg";
import plastic from "../assets/plastic.svg";
import hand from "../assets/hand.webp";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Productpage = () => {
  return (
    <div>

    <div style={{ backgroundColor: "#D1C9F7" }} className="flex-col md:flex-row">

   <Navbar/>

  <h1 className="text-center mt-[30px] font-bold text-[80px] text-purple-500">
    Unlock free Deliveries<br />
    And reduce fees
  </h1>

  <p className="text-center mt-[10px] text-[20px]">
    For just ₦3500, you can enjoy savings on orders with Chowpass
  </p>

  <center>
    <button className="text-[20px] text-white font-normal bg-purple-500 p-[12px] mt-[20px] rounded-[8px] cursor-pointer">
      Subscribe Now
    </button>
  </center>

  <div className="flex-col md:flex-row">

    <p className="text-[15px] text-purple-500 text-center mt-[50px] font-bold">
      ALL BENEFITED
    </p>

    <div className="flex flex-col md:flex-row gap-[10px] mt-[40px]">

      <div className="bg-white md:w-[30%] rounded-[8px] mb-[50px]">
         <div>
         <img src={deliverybag} />
          <p className="text-purple-500 mt-[6px]">
          Delivery Free<br />
            className="flex gap-[6px] ml-[30px] mt-[20px]"
          </p>
        </div>

        <p className="mt-[60px] text-[15px] ml-[20px]">
          Free delivery on all orders<br />
          above ₦3,000 from any<br />
          Chowpass vendor within your<br />
          delivery radius
        </p>

      </div>

      <div className="bg-white md:w-[25%] rounded-[8px] h-[225px]">

        <div className="flex gap-[6px] ml-[30px] mt-[20px]">
          <img src={calculator} />
          <p className="text-purple-500 mt-[6px]">
            Reduced<br />
            service Fee
          </p>
        </div>

        <p className="text-[15px] ml-[30px] pt-[37%]">
          Pay as low as 3% in service<br />
          fees vs the standard 10%
        </p>

      </div>

      <div className="bg-white md:w-[25%] rounded-[8px] mb-[50px]">

        <div className="flex gap-[6px] ml-[30px] mt-[20px]">
          <img src={pas} />
          <p className="text-purple-500 mt-[6px]">
            Free<br />
            delivery
          </p>
        </div>

        <p className="mt-[60px] text-[15px] ml-[30px] pt-[30px]">
          Skip surge fees, no matter<br />
          the time or weather
        </p>

      </div>

      <div className="bg-white md:w-[25%] rounded-[8px] mb-[50px]">

        <div className="flex gap-[6px] ml-[30px] mt-[20px]">
          <img src={surge} />
          <p className="text-purple-500 mt-[6px]">
            No surge<br />
            Free
          </p>
        </div>

        <p className="mt-[60px] text-[15px] ml-[30px] pt-[30px]">
          Skip surge fees, no matter<br />
          the time or weather
        </p>

      </div>

    </div>

  </div>

  <p className="text-center mt-[50px] font-bold">CHOWPASS PLANS</p>

  <p className="text-center mt-[60px] text-[#271386] font-bold text-[60px]">
    Become a member<br />
    with a plan curated<br />
    just for you
  </p>

  <div className="flex-col md:flex-row flex gap-[20px] justify-center mt-[40px]">

    <div className="bg-white md:w-[30%] h-[300px] rounded-[10px]">

      <div className="flex mt-[20px] justify-center gap-[5px]">
        <img src={star} />
        <p className="text-[20px] text-center text-[#271386]">Monthly</p>
      </div>

      <p className="mt-[10px] text-[60px] text-center text-[#271386]">₦3,500</p>

      <p className="mt-[10px] text-center text-[#271386]">popular</p>

    </div>

    <div className="bg-white md:w-[30%] h-[300px] rounded-[10px] mb-[80px]">

      <div className="flex mt-[20px] justify-center gap-[5px]">
        <img src={star} />
        <p className="text-[20px] text-center text-[#271386]">Quaterly</p>
      </div>

      <p className="mt-[10px] text-[60px] text-center text-[#271386]">₦10,500</p>

      <p className="mt-[10px] text-center text-[#271386]">save ₦500</p>

    </div>

  </div>

</div>

    <div className="bg-white md:w-[30%] h-[300px] rounded-[10px]">

  <div className="flex mt-[20px] justify-center gap-[5px]">
    <img src={star} />
    <p className="text-[20px] text-center text-[#271386]">Bi-Annually</p>
  </div>

  <p className="mt-[10px] text-[60px] text-center text-[#271386]">₦18,000</p>
  <p className="mt-[10px] text-center text-[#271386]">save ₦3,000</p>

</div>

<div style={{ backgroundColor: "#271386" }}>

  <p className="text-[50px] pt-[80px] text-center text-white">
    Start enjoying<br />
    benefits now!
  </p>

  <div>

    <p className="mt-[20px] text-white text-center">
      LIVE EXCLUSIVELY IN LAGOS AND ABUJA
    </p>

    <center>
      <button className="text-[17px] font-normal text-white bg-[#D1C9F7] p-[10px] mt-[30px] rounded-[8px] cursor-pointer mb-[120px]">
        Join Now
      </button>
    </center>

  </div>

</div>

<div style={{ backgroundColor: "black" }} className="flex-col md:flex-row">

  <div
    className="flex-col md:flex-row flex m-auto max-w-[90%] pt-[40px] rounded-[10px] border-[3px] gap-[15%]"
    style={{ backgroundColor: "white" }}
  >

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

      <div style={{ backgroundColor: "#8C77EC" }} className="pt-[20px] pl-[10px] mb-[40px] rounded-[10px] h-[400px]">

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
        Download on goggle playstore
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
      <img src={hand} className="w-[450px] h-[900px]" alt="" />
    </div>

  </div>

  <div className="flex mt-[50px] gap-[20px]">

    <p className="text-white text-[40px] ml-[40px]">
      Cool stuff only
    </p>

    <p className="text-white text-[16px] mt-[30px] text-gray-500">
      Subscribe to our news latter
    </p>

  </div>

  <input
    type="text"
    placeholder="yourname@email.com"
    className="text-white w-[100%] mb-[40px] p-[60px] pt-[40px] pb-[40px] mt-[30px] border-t-[1px] border-b-[1px]"
  />


    <Footer/>
    </div>
</div>
  );
};

export default Productpage;