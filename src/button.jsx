import React, { useState } from 'react'

const Button = () => {
  const [buttonArray, setButtonArray] = useState([]);

  const handleclick =(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    const newButton = {x, y, id:Date.now()}
    setButtonArray((prev)=>[...prev,newButton])

   setTimeout(()=>{
     setButtonArray((prev)=>prev.filter((button)=>button.id !== newButton.id))
   },2000)
  }


  return (
   <div className='container' onClick={handleclick}>
    {buttonArray.map((btn)=>(
      <button key={btn.id} className='btn' style={{left:btn.x, top:btn.y}}>clicked me</button>
    ))}
   </div>
  )
}

export default Button
