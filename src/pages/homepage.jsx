import React from "react";

 import { Link } from "react-router-dom";

import NigeriaFlag from "../assets/NigeriaFlag.svg";
import street from "../assets/street.png"
import shopping from "../assets/shopping.png";
import menu from "../assets/menu.png";
import star from "../assets/star.svg";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import orange from "../assets/orange.webp";
import box from "../assets/box.webp";
import image from "../assets/image.webp";
import Fitfam from "../assets/Fitfam.svg";
import orderarrived from "../assets/order-arrived.png";
import ordertransit from "../assets/order-transit.png";
import pickup from "../assets/pickup.png";
import acceptorder from "../assets/accept-order.png";
import Pasta from "../assets/Pasta.svg";
import postbanner from "../assets/post-banner.png";
import biker from "../assets/biker.png";
import plastic from "../assets/plastic.svg";
import Promocode from "../assets/Promo-code.svg";
import hand from "../assets/hand.webp"
import Navbar  from "../component/Navbar";
import Footer from "../component/Footer";

 
  const Homepage = () => {
  return (
    <div>
      <div
     style={{ backgroundImage: `url(${street})`, backgroundSize: "cover" }}
     className="pb-[80px]"
    >

        <Navbar/>

        <h1 className="text-center mt-[50px] text-[70px] font-bold">YOU DUN CHOW?</h1>

        <div className="flex items-center w-[50%] mt-[50px] bg-white m-auto rounded-[30px] p-[7px]">

      <img src={location} className="w-[4%] h-[5%] mt-[18px] ml-[5px]" alt="" />

          <input type="text" placeholder="Enter a delivery address" className="w-[75%] pt-[10px] pb-[10px] text-black rounded-[17px]" />

          <button className="text-[15px] font-normal text-black rounded-[10px] w-[20%] bg-green-500 rounded-[15px] my-[10px] mr-[8px] p-[7px]">Order Now</button>

        </div>

      </div>

      <div>
        <div>
          <p className="text-center font-bold text-[70px] mt-[80px]">what on Deck</p>
          <p className="text-center mt-[20px] text-[23px]">Try the everything app</p>
        </div>

        <center>
          <button className="text-[20px] p-[13px] text-white mt-[30px] bg-green-500 rounded-[10px] m-[15px]">Download on goggle playstore</button>
          <button className="text-[20px] p-[13px] text-white bg-green-500 rounded-[10px]">Download on App store</button>
        </center>

      <img src={phone} className="m-auto mt-[50px]" alt="" />

      </div>

      <div className="flex-col md:flex-row flex justify-center gap-[20px]">

        <div className="bg-gray-500 mt-[90px] border-[3px] p-[10px] rounded-[8px]">
          <div>
            <p className="text-[20px] font-bold mt-[20px]">Start Selling</p>
            <p className="mt-[15px] text-[13px] font-normal mb-[30px]">
              Do you own a restaurant, store,<br />
              or pharmacy? Join our network to reach new<br />
              customers and grow your business with<br />
              ease with.
            </p>
          </div>

          <div>
            <a href="">SEE MORE</a>
          </div>

           <img src={orange} className="w-[300px] mt-[40px]" alt="" />
        </div>

        <div className="bg-gray-500 mt-[90px] border-[3px] p-[10px] rounded-[8px]">
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

        <div className="bg-gray-500 mt-[90px] border-[3px] p-[10px] rounded-[8px]">
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

      <div style={{ backgroundColor: "darkgreen" }} className="mt-[90px] flex-col md:flex-row">

        <img src={Fitfam} className="w-[980px] rounded-[10px] m-auto bg-orange-500 p-[60px]" alt="" />

        <div className="flex-col md:flex-row flex ml-[80px]">
          <p className="mt-[70px] text-[50px] text-white">
            ChowDek has<br />
            you covered
          </p>

          <p className="text-[23px] mt-[80px] text-white ml-[10%] mb-[50px]">
            what do you need? A quick fix on a busy day?<br />
            Last-minute dinner backup? Supplies for the<br />
            week? Download Chowdeck and lets deliver<br />
            happiness to your doorstep in minutes.
          </p>
        </div>

   <div className="flex-col md:flex-row flex mt-[40px] justify-center items-center gap-[40px] text-white ml-[20px]">
  <p>Free market picks</p>
  <p>Live updates on order</p>
  <p>Fresh market picks</p>
  <p>Quality meal choices</p>
  <p>High rated riders</p>
  <p>Essential health care</p>
</div>

<div className="flex-col md:flex-row flex mt-[50px] justify-center items-center gap-[10px] pb-[70px]">
<img src={orderarrived} className="w-[250px]" alt="" />
<img src={ordertransit} className="w-[250px]" alt="" />
<img src={acceptorder} className="w-[250px]" alt="" />
<img src={pickup} className="w-[250px]" alt="" />

</div>

</div> 

<div>

  <div className="flex-col md:flex-row flex mt-[70px] gap-[20px]">
    <p className="font-bold text-[50px] ml-[40px] mt-[10px]">Stories</p>
     <img src={Pasta} className="" alt="" />
  </div>

  <div className="flex-col md:flex-row flex gap-[30px] justify-center mt-[40px]">

    <div className="border-[3px] p-[10px] rounded-[8px]">
      <img src={postbanner} className="w-[300px] border-[3px] rounded-[8px]" alt="" />
      <div>
        <p className="text-center text-[15px] mt-[20px] font-bold">
          Chowdeck Announces Onazi As Brand<br />
          Ambassador
        </p>

        <p className="text-[15px] text-center mt-[15px] ">
          Chowdeck welcomes Super Eagles<br />3
          icon Ogenyi Onazi as its brand<br />
          ambassador, marking a new chapter in<br />
          the companys journey...
        </p>

        <button className="text-[17px] w-[100%] bg-green-500 p-[10px] mt-[10px] rounded-[7px] text-white">READ MORE</button>
      </div>
    </div>

    <div className="border-[3px] rounded-[8px] p-[10px]">
     <img src={biker} className="w-[300px] border-[3px] rounded-[8px]" alt="" />
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

        <button className="text-[17px] w-[100%] bg-green-500 p-[10px] mt-[10px] rounded-[7px] text-white">READ MORE</button>
      </div>
    </div>

    <div className="border-[3px] p-[10px] rounded-[8px]">
    <img src={postbanner} className="w-[300px] border-[3px] rounded-[8px]" alt="" />
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

        <button className="text-[17px] w-[100%] bg-green-500 p-[10px] mt-[10px] rounded-[7px] text-white">READ MORE</button>
      </div>
    </div>

  </div>

  <div style={{ backgroundColor: "black" }}>

    <div
      className="flex-col md:flex-row flex m-auto max-w-[90%] mt-[40px] pb-[40px] rounded-[10px] border-[3px] gap-[15%]"
      style={{ backgroundColor: "white" }}
    >

      <div className="ml-[10%]">
        <p className="text-green-500 text-[70px] mt-[90px]">FAQS</p>
        <p className="mt-[30px] text-[19px]">what is chowdeck wallet?</p>
        <p className="mt-[30px] text-[19px]">what is service fee?</p>
        <p className="mt-[30px] text-[19px]">why do we charge service fee?</p>
        <p className="mt-[30px] text-[19px]">what is surge fee?</p>
        <p className="mt-[30px] text-[19px]">why do we charge surge fee?</p>
        <p className="mt-[30px] text-[19px]">how do i update my profle?</p>
      </div>

      <div className="">
        <p className="text-[70px] text-green-500 mt-[90px]">ANS</p>

        <div style={{ backgroundColor: "gold" }} className="pt-[20px] pl-[10px] pb-[50px] rounded-[10px]">
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

    <div className="flex-col md:flex-row flex justify-center mt-[50px] pb-[40px] gap-[5%]">

      <div style={{ backgroundColor: "#0C513F" }} className="p-[60px] pl-[50px] rounded-[8px]">
        <p className="text-white text-[40px] mt-[10px]">
          Place your<br />
          orders in seconds
        </p>

        <button className="text-[17px] p-[10px] text-black mt-[30px] bg-white rounded-[10px]">Download on goggle playstore</button>

        <div>
          <button className="text-[17px] p-[10px] text-black mt-[10px] bg-white rounded-[10px]">Download on App Store</button>
        </div>

        <div className="flex mt-[80px]">
          <img src={Promocode} className="w-[80px] mt-[40%]" alt="" />
         <img src={plastic} className="w-[120px] ml-[40%]" alt="" />
        </div>

        <div className="">
          <button className="bg-[#FFC501] text-black p-[10px] rounded-[12px] border-[3px] cursor-pointer">CDNWEB</button>
          <p className="text-[13px] text-white mt-[30px">
            Get <span className="text-[#FFC501]">₦300 off</span> your first order when you use<br />
            this promo code!
          </p>
        </div>

      </div>

      <div className="">
        <img src={hand} className="w-[400px] h-[900px]" alt="" />
      </div>

    </div>

    <div className="flex mt-[50px] gap-[20px]">
      <p className="text-white text-[40px] ml-[40px] text-white">Cool stuff only</p>
      <p className="text-white text-[16px] mt-[30px] text-gray-500">Subscribe to our news latter</p>
    </div>

    <div>
      <input type="text" placeholder="yourname@email.com" className="text-white w-[100%] mb-[40px] p-[60px] pt-[40px] pb-[40px] mt-[30px] border-t-[1px] border-b-[1px]" />
    </div>

  </div>
  
  <Footer/>
  </div>
  </div>
  )
}

export default Homepage;
