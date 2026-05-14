import React from 'react'

import { Link } from "react-router-dom";


import NigeriaFlag from "../assets/NigeriaFlag.svg";
import shopping from "../assets/shopping.png";
import menu from "../assets/menu.png";
import star from "../assets/star.svg";
import withdraw from "../assets/withdraw.png";
import order from "../assets/order.webp";
import box from "../assets/box.webp";
import image from "../assets/image.webp";
import Pasta from "../assets/Pasta.svg";
import postbanner from "../assets/post-banner.png";
import biker from "../assets/biker.png";
import Promocode from "../assets/Promo-code.svg";
import plastic from "../assets/plastic.svg";
import hand from "../assets/hand.webp";
import Navbar from '../component/Navbar';

const Riderpage = () => {
  return (
    <div>
      
<div style={{ backgroundColor: "#0C513F" }} className="flex-col md:flex-row">

     <Navbar/>

     <h1 className="mt-[80px] text-[75px] font-bold ml-[50px]">Become a<br />
       Champion</h1>
     
    <button className="text-[20px] p-[13px] text-white mt-[30px] bg-green-500 rounded-[10px] ml-[50px]">Download on goggle playstore</button>
    <button className="text-[20px] p-[13px] text-white bg-green-500 rounded-[10px] m-[20px] mb-[80px]">Download on App store</button>
   </div>

   <div className="flex-col md:flex-row flex m-auto max-w-[95%] mt-[40px] border-[3px] rounded-[8px]">

      <div>
      <p className="text-[50px] mt-[80px] font-bold ml-[40px]">Withdraw straight<br />
         to your account</p>
      <p className="mt-[30px] ml-[40px] text-[18px]">no delay withraw from your wallet<br />
         and into your account with ease.</p>
      </div>

      <div>
       <img src={withdraw} className="w-[500px] pt-[30px] pb-[30px]" alt="" />
      </div>

   </div>

     <p className="text-center mt-[20px] text-[50px] text-grey-500">Join our growing business</p>

    <div className="flex justify-center gap-[20px] flex-col md:flex-row">

     <div className=" bg-grey-500 mt-[90px] border-[3px] p-[10px] rounded-[8px]">
         <div>
       <p className="text-[20px] font-bold mt-[20px]">Order in three steps</p>
       <p className="mt-[15px] text-[13px] font-normal mb-[30px]">
        Do you own a restaurant, store,<br />
         or pharmacy? Join our network to reach new<br />
          customers and grow your business with<br />
          ease.
       </p>
         </div>
        <div>
          <a href="">SEE MORE</a>
        </div>
        <img src={order} className="w-[300px] mt-[40px]" alt="" />
     </div>

     <div className=" bg-grey-500 mt-[90px] border-[3px] p-[10px] rounded-[8px]">
         <div>
       <p className="text-[20px] font-bold mt-[20px]">Deliver Happiness</p>
       <p className="mt-[15px] text-[13px] font-normal mb-[30px]">
        Do you own a restaurant, store,<br />
         or pharmacy? Join our network to reach new<br />
          customers and grow your business with<br />
          ease.
       </p>
         </div>
        <div>
          <a href="">SEE MORE</a>
        </div>
        <img src={box} className="w-[300px] mt-[40px]" alt="" />
     </div>

     <div className=" bg-grey-500 mt-[90px] border-[3px] p-[10px] rounded-[8px]">
         <div>
       <p className="text-[20px] font-bold mt-[20px]">Behind the Scenes</p>
       <p className="mt-[15px] text-[13px] font-normal mb-[30px]">
        Do you own a restaurant, store,<br />
         or pharmacy? Join our network to reach new<br />
          customers and grow your business with<br />
          ease.
       </p>
         </div>
        <div>
          <a href="">SEE MORE</a>
        </div>
        <img src={image} className="w-[300px] mt-[40px]" alt="" />
     </div>

</div>

<div/>

  <div className="flex flex-col md:flex-row mt-[70px] gap-[20px]">
    <p className="font-bold text-[50px] ml-[40px] mt-[10px]">Stories</p>
    <img src={Pasta} className="" alt="" />
  </div>

<div className="flex flex-col md:flex-row gap-[30px] justify-center mt-[40px]"/>

   <div className=" border-[3px] p-[10px] rounded-[8px]">
     <img src={postbanner} className="w-[300px] border-[3px]" alt="" />
    <div className="">
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

        <div className="border-[3px] rounded-[8px] p-[10px]">
     <img src={biker} className="w-[300px] border-[3px]" alt="" />
    <div>
       <p className="text-center mt-[20px] font-bold">
        Chowdeck Announces Onazi As Brand<br />
                 Ambassador</p>
         <p className="text-center text-[15px] mt-[15px]">
           Chowdeck welcomes Super Eagles<br />
            icon Ogenyi Onazi as its brand<br />
            ambassador, marking a new chapter in<br />
            the companys journey...</p>
        <button className="text-[17px] w-[100%] bg-green-500 p-[10px] mt-[10px] rounded-[7px] text-[white]">READ MORE</button>    
    </div>

   </div>
   <div className="border-[3px] rounded-[8px] p-[10px]">
     <img src={postbanner} className="w-[300px] border-[3px]" alt="" />
    <div>
       <p className="text-center text-[15px] mt-[20px] font-bold">
        Chowdeck Announces Onazi As Brand<br />
                 Ambassador</p>
         <p className="text-center text-[15px] mt-[15px]">
           Chowdeck welcomes Super Eagles<br />
            icon Ogenyi Onazi as its brand<br />
            ambassador, marking a new chapter in<br />
            the companys journey...</p>

      <button className="text-[17px] w-[100%] bg-green-500 p-[10px] mt-[10px] rounded-[7px] text-[white]">READ MORE</button>    
        </div>

      <div style={{ backgroundColor: "black" }} className="flex-col md:flex-row">

  <div className="flex-col md:flex-row flex m-auto max-w-[90%] pt-[40px] rounded-[10px] border-[3px] gap-[15%]" style={{ backgroundColor: "white" }}>

    <div className="ml-[10%]">
       <p className="text-green-500 text-[60px] mt-[30px]">FAQS</p>
     <p className="mt-[30px] text-[19px]">what is chowdeck wallet?</p>
     <p className="mt-[30px] text-[19px]">what is service fee?</p>
     <p className="mt-[30px] text-[19px]">why do we charge service fee?</p>
     <p className="mt-[30px] text-[19px]">what is surge fee?</p>
     <p className="mt-[30px] text-[19px]">why do we charge surge fee?</p>
     <p className="mt-[30px] text-[19px]">how do i update my profle?</p>
    </div>

     <div className="">
      <p className="text-[60px] text-green-500 mt-[30px]">ANS</p>
     <div style={{ backgroundColor: "gold" }} className="pt-[20px] pl-[10px] mb-[40px] rounded-[10px] h-[400px]">
       <p className="text-[20px] text-white">
         Chowpass is a membership subscription<br />
         program for customers that offers free<br />
         deliveries, reduced service fees, and no<br />
         surge fees on orders from selected
         vendors.</p>
     </div>

    </div>
 

  </div>

        <div className="flex-col md:flex-row flex justify-center mt-[50px] pb-[40px] gap-[5%]">

     <div style={{ backgroundColor: "#0C513F" }} className="p-[60px] pl-[50px] rounded-[8px]">
       <p className="text-white text-[40px] mt-[10px]">
          Place your<br />
         orders in seconds</p>

      <button className="text-[17px] p-[10px] text-black mt-[30px] bg-white rounded-[10px]">Download on goggle playstore</button>
           <div>
         <button className="text-[17px] p-[10px] text-black mt-[10px] bg-white rounded-[10px]">Download on App Store</button>
           </div>

        <div className="flex mt-[80px]">
        <img src={Promocode} className="w-[80px] mt-[40%]" alt="" />
        <img src={plastic} className="w-[120px] ml-[40%]" alt="" />
        </div>

        <div className="flex-col md:flex-row">       
        <button className="bg-[#FFC501] text-black p-[10px] rounded-[12px] border-[3px] cursor-pointer">CDNWEB</button>
          <p className="text-[13px] text-white mt-[30px]">Get  <span className="text-[#FFC501]">₦300 off</span> your first order when you use<br />
             this promo code!</p>
        </div>

     </div>

      <div className="flex-col md:flex-row">
        <img src={hand} className="w-[400px]  h-[900px]" alt="" />
      </div>

   </div>

    <div className="flex mt-[50px] gap-[20px]">
     <p className="text-white text-[40px] ml-[40px] text-white">Cool stuff only </p>
      <p className="text-white text-[16px] mt-[30px] text-grey">Subscribe to our news latter</p>
    </div>

    <input type="text" placeholder="yourname@email.com" className=" text-white w-[100%] mb-[40px] p-[60x] pt-[40px] pb-[40px] mt-[30px] border-t-[1px] border-b-[1px]" />

    <Footer/>
    </div> 
    </div>
</div>
  )
}

export default Riderpage;
