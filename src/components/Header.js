import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header=()=>{
   const [toggleLogin, setToggleLogin]=useState("Login");
   const cartItems  =useSelector((store)=>store.cart.items);
    return(
        <div className="place-content-between m-4 p-4 flex bg-yellow-400 shadow-lg">
            <div className="logo-container">
                <img className="w-36 h-36" alt="Logo" 
                src={LOGO_URL}/>
                </div>

            <div className="nav-items">
                <ul className="flex m-11 text-xl p-2 cursor-pointer">
                    <li className="p-4 font-bold"><Link to="/">Home</Link></li>
                    <li className="p-4 font-bold"><Link to="/contact">Contact</Link></li>
                    <li className="p-4 font-bold"><Link to="/about">About</Link></li>
                    <li className="p-4 font-bold"><Link to="/cart">Cart({cartItems.length}-items)</Link></li>
                    <button className="p-4 font-bold bg-black text-white " onClick={()=>{
                    toggleLogin=="Login"?(setToggleLogin("Logout")):(setToggleLogin("Login"))
                    }}>{toggleLogin}</button>
                    
                </ul>
            </div>
           
        </div>
    )
}

export default Header;