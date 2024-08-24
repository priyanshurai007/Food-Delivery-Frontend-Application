const ItemList=({items})=>{
    console.log(items)
    return(
        <div>
            {items.map((x)=>(
                <div className="place-content-start">
                    <span >
                        {x.card.info.name}
                    </span>
                    <span>{-x.card.info.price/100}Rs</span>
                    <div className="m-2 p-2">
                        <p className="text-xs">{x.card.info.description}</p>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;