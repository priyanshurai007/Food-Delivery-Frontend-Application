import { useState } from "react";
import ItemList from "./ItemList.js";
const RestaurantCategory = ({ data , showItems, setShowItems}) => {
 const handleClick=()=>{
setShowItems();
 }
    
    return (
        <div className="text-center bg-slate-100 font-bold w-3/4 mx-auto my-10 p-6 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer">
            <div className="place-content-between">
                <div className="border-black-400 border-b-2 p-2 m-2 cursor-pointer " onClick={()=>handleClick()}>
                <span className="text-lg md:text-xl">{data.title}</span>
                <span className="ml-2">⬇️</span>
                </div>
               {showItems&&<ItemList items={data.itemCards}/>} 
            </div>
            
        </div>
    );
};

export default RestaurantCategory;
