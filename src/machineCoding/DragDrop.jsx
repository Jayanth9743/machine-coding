import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart } from "./redux/slice/cartSlice";

const DragDrop = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const cartData = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  console.log("redux data",cartData);
  

  const [dragedIndex, setDragedIndex] = useState(null);

  const onDragStart = (index) => {
    setDragedIndex(index);
  };

  const handleOver=(e)=>{
    e.preventDefault()
  }

  const handleDrop=(index)=>{
    const newItems = [...items];

    const dragedItem = newItems.splice(dragedIndex,1)[0];
    console.log(dragedIndex);
    

    newItems.splice(index,0,dragedItem)
    setItems(newItems)
  }
  return (
    <div className="faqContainer">
      <h2>drag drop</h2>
      {items.map((item, i) => (
        <div
          key={i}
          draggable
          style={{
            width: "150px",
            padding: "5px",
            border: "1px solid black",
            cursor: "pointer",
          }}
          onDragStart={()=>onDragStart(i)}
          onDragOver={handleOver}
          onDrop={()=>handleDrop(i)}
        >
          {item}
        </div>
      ))}
      <button onClick={()=>dispatch(addToCart({id:1,item:"money",quantity:1,price:500}))}>add data to cart</button>
      <button onClick={()=>dispatch(removeFromCart(1))}>delete data from cart</button>
    </div>
  );
};

export default DragDrop;
