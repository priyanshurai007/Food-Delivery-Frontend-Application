import { RES_LOGO } from "../utils/constants";



const RestaurantCard=(props)=>{
    const {resData} = props;
    return(
  <div className="m-4 p-4 h-full w-80 bg-slate-200 cursor-pointer hover:bg-yellow-400" 
    
  >
    <div >
      <img className="w-50 h-80" alt="res-card-logo" src={RES_LOGO+resData.info.cloudinaryImageId}/>
    </div>
    <h1 className="font-bold">{resData.info.name}</h1>
    <h2 >{resData.info.avgRating} Star</h2>
    <p>{resData.info.cuisines.join()}</p>
    <h2>{resData.info.sla.deliveryTime} minutes</h2>
  </div>
    )
}

export default RestaurantCard;