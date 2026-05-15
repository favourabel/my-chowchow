 import React, { useState } from "react";
import { Link } from "react-router-dom";

import NigeriaFlag from "../assets/NigeriaFlag.svg";
import shopping from "../assets/shopping.png";
import menu from "../assets/menu.png";
import star from "../assets/star.svg";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
       <header className="w-full">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        <nav className="flex justify-between items-center p-4">

          <div className="flex items-center gap-2">
            <p className="text-[15px] bg-green-500 p-3 rounded-full">C</p>
            <img src={NigeriaFlag} className="w-[35px] bg-white p-2 rounded-full" />
          </div>

          <div className="flex items-center gap-3">

            <img src={shopping} className="w-[35px] bg-green-500 p-2 rounded-full" />

            <button onClick={() => setOpen(!open)}>
              <img src={menu} className="w-[35px] bg-white p-2 rounded-full" />
            </button>

          </div>

        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="bg-white shadow-md p-4 flex flex-col gap-3">
            <Link to="/company" onClick={() => setOpen(false)}>Company</Link>
            <Link to="/vendor" onClick={() => setOpen(false)}>Vendor</Link>
            <Link to="/rider" onClick={() => setOpen(false)}>Rider</Link>
            <Link to="/product" onClick={() => setOpen(false)}>Product</Link>
          </div>
        )}

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        <nav className="flex justify-between items-center p-6">

          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">
              <img src={star} className="w-[25px]" />
              <p className="text-[22px]">
                <span className="font-bold">chow</span>pass
              </p>
            </div>

            <div className="flex items-center bg-white px-3 py-1 rounded-md">
              <img src={NigeriaFlag} className="w-[20px]" />
              <p className="ml-2">NG</p>
            </div>

          </div>

          <ul className="flex gap-6 bg-white p-3 rounded-lg">
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/vendor">Vendor</Link></li>
            <li><Link to="/rider">Rider</Link></li>
            <li><Link to="/product">Product</Link></li>
          </ul>

          <button className="bg-white px-4 py-2 rounded-md">
            More
          </button>

        </nav>

      </div>

    </header>
  );
};

export default Navbar;