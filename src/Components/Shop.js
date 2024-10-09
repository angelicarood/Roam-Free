import React from "react";
import StripeContainer from "./StripeContainer";
import tent from '../assets/tent.png'; //Go up one level to access assets
import {useState} from 'react';


const Shop = () => {
    const [showItem, setShowItem] = useState(false);
    
  return (
    <div clssName="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-5">The Tent Shop</h1>
      {showItem ? <StripeContainer/> : <> <h3 className="font-bold">$100.00</h3> <img src={tent} alt="Tent"/>
      <button onClick={() => setShowItem(true)}>Buy Now</button> </>}
    </div>
  );
}

export default Shop;