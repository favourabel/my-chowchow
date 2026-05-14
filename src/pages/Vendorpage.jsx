import React from 'react';

import { Link } from "react-router-dom";


import NigeriaFlag from "../assets/NigeriaFlag.svg";
import shopping from "../assets/shopping.png";
import menu from "../assets/menu.png";
import star from "../assets/star.svg";
import faith from "../assets/faith.webp";
import Switch from "../assets/Switch.webp";
import keep from "../assets/keep.webp";
import manage from "../assets/manage.webp";
import postbanner from "../assets/post-banner.png";
import biker from "../assets/biker.png";
import Promocode from "../assets/Promo-code.svg"
import plastic from "../assets/plastic.svg";
import hand from "../assets/hand.webp";
import Navbar from '../component/Navbar';

const Vendorpage = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={{ backgroundColor: "#FFEDB3" }} className="flex-col md:flex-row">


     <NavBar/>

   <h1 className="ml-[60px] mt-[70px] font-bold text-[80px]">
      Sell More.<br />
      Grow More.</h1>

    <p className="ml-[60px] mt-[30px] text-[15px]">
      Join thousands of restaurants, supermarkets, beauty stores and<br />
       pharmacies reaching millions of customers daily on Chowdeck.</p>
      
       <button className="ml-[60px] mt-[30px] bg-black text-grey-500 text-white p-[17px] rounded-[7px]">start selling on chowdeck</button>
       <button className="m-[20px] text-[15px] bg-transparent border-[3px] p-[17px] rounded-[8px] mb-[70px]">Login</button>

      <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-[30%] items-center justify-center">
       <img src={faith} className="w-full max-w-[260px] h-auto" alt="" />
       <img src={Switch} className="w-full max-w-[260px] h-auto" alt="" />
       <img src={keep} className="w-full max-w-[260px] h-auto" alt="" />
       <img src={manage} className="w-full max-w-[260px] h-auto" alt="" />
      </div>


  </div>

  <div>

    <div className="border-[3px] rounded-[8px] p-[10px] w-full">
     <img src={postbanner} className="w-full max-w-[300px] h-auto border-[3px]" alt="" />
    <div>

       <p className="text-center text-[15px] mt-[20px] font-bold">
        Chowdeck Announces Onazi As Brand<br />
                 Ambassador</p>

         <p className="text-[15px] text-center mt-[15px] ">
           Chowdeck welcomes Super Eagles<br />
            icon Ogenyi Onazi as its brand<br />
            ambassador, marking a new chapter in<br />
            the companys journey...</p>

    <button className="text-[17px] w-[100%] bg-green-500 p-[10px] mt-[10px] rounded-[7px] text-[white]">READ MORE</button>
    </div>
   </div>

  </div>
   
<div className="border-[3px] rounded-[8px] p-[10px] w-full">
<img src={biker} className="w-full max-w-[300px] h-auto border-[3px]" alt="biker" />


  <div>

    <p className="text-center mt-[20px] font-bold">
      Chowdeck Announces Onazi As Brand<br />
      Ambassador
    </p>

    <p className="text-center text-[15px] mt-[15px]">
      Chowdeck welcomes Super Eagles<br />
      icon Ogenyi Onazi as its brand<br />
      ambassador, marking a new chapter in<br />
      the companys journey...
    </p>

    <button className="text-[17px] w-[100%] bg-green-500 p-[10px] mt-[10px] rounded-[7px] text-[white]">
      READ MORE
    </button>
  </div>
</div>

<div className="border-[3px] rounded-[8px] p-[10px] w-full">
  <img src={postbanner} className="w-full max-w-[300px] h-auto border-[3px]" alt="" />


  <div>
    <p className="text-center text-[15px] mt-[20px] font-bold">
      Chowdeck Announces Onazi As Brand<br />
      Ambassador
    </p>

    <p className="text-center text-[15px] mt-[15px]">
      Chowdeck welcomes Super Eagles<br />
      icon Ogenyi Onazi as its brand<br />
      ambassador, marking a new chapter in<br />
      the companys journey...
    </p>

    <button className="text-[17px] w-[100%] bg-green-500 p-[10px] mt-[10px] rounded-[7px] text-[white]">
      READ MORE
    </button>
  </div>
</div>

<div style={{ backgroundColor: "black" }}>
  <div
    className="flex flex-col md:flex-row m-auto max-w-[90%] mt-[40px] pb-[40px] rounded-[10px] border-[3px] gap-[15%] px-4"
    style={{ backgroundColor: "white" }}
  >
    <div className="flex-1 flex-col md:flex-row items-start md:items-center">
      <p className="text-green-500 text-[50px] md:text-[70px] mt-10 md:mt-[90px]">FAQS</p>

      <p className="mt-6 text-[16px] md:text-[19px]">what is chowdeck wallet?</p>
      <p className="mt-6 text-[16px] md:text-[19px]">what is service fee?</p>
      <p className="mt-6 text-[16px] md:text-[19px]">why do we charge service fee?</p>
      <p className="mt-6 text-[16px] md:text-[19px]">what is surge fee?</p>
      <p className="mt-6 text-[16px] md:text-[19px]">why do we charge surge fee?</p>
      <p className="mt-6 text-[16px] md:text-[19px]">how do i update my profle?</p>
    </div>


    <div className="flex-col md:flex-row items-center">
      <p className="text-[70px] text-green-500 mt-[90px]">ANS</p>

      <div
        style={{ backgroundColor: "gold" }}
        className="pt-[20px] pl-[10px] pb-[50px] rounded-[10px]"
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

   <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-[50px] pb-8 md:pb-[40px] gap-6 px-4">
    <div style={{ backgroundColor: "#0C513F" }} className="p-8 md:p-[60px] md:pl-[50px] rounded-[8px]">

      <p className="text-white text-[40px] mt-[10px]">
        Place your<br />
        orders in seconds
      </p>

       <button className="text-[15px] sm:text-[17px] p-[10px] text-black mt-6 sm:mt-[30px] bg-white rounded-[10px] w-full sm:w-auto">
        Download on goggle playstore
      </button>


      <div>
        <button className="text-[17px] p-[10px] text-black mt-[10px] bg-white rounded-[10px]">
          Download on App Store
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-10 md:mt-[80px]">
        <img src={Promocode} className="w-[80px] h-auto" alt="" />
        <img src={plastic} className="w-[120px] h-auto" alt="" />
      </div>


      <div>
        <button className="bg-[#FFC501] text-black p-[10px] rounded-[12px] border-[3px] cursor-pointer">
          CDNWEB
        </button>

        <p className="text-[13px] text-white mt-[30px]">
          Get <span className="text-[#FFC501]">₦300 off</span> your first order when you use
          <br />
          this promo code!
        </p>
      </div>
    </div>

    <div>
      <img src={hand} className="w-[400px] h-[900px]" />
    </div>
  </div>

  <div className="flex mt-[50px] gap-[20px]">
    <p className="text-white text-[40px] ml-[40px]">
      Cool stuff only
    </p>

    <p className="text-white text-[16px] mt-[30px] text-grey">
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

  
  )
}

export default Vendorpage;
