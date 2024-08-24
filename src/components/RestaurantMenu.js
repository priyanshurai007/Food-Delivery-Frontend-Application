import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{
    const[restMenu, setRestMenu]=useState([]);
    const[showItems, setShowItems]=useState(null);
    const {resId}=useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>{
        const data= await fetch(MENU_API+resId)
        const json= await data.json();
        // console.log(json);
        setRestMenu(json?.data);
    }
   
    if (!restMenu || restMenu.length === 0) {
        return <Shimmer />;
      }
    
   
      const category=restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>e.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      console.log(category);
    // console.log(restMenu);
    return(
        
        <div >
            
            <h1 className="p-4 m-4 font-bold bg-slate-200  text-center">{restMenu?.cards[0]?.card?.card?.text}</h1>
            {category.map((categories,index)=><RestaurantCategory showItems={index==showItems?true:false} setShowItems={()=>setShowItems(index)
            } data={categories.card.card}/>)}
        </div>
        
        
    ); 
}

export default RestaurantMenu;