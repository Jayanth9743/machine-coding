import React, { useState } from 'react'

const Grid = () => {

  const [boxes, setBoxes] = useState(Array(6).fill({
    isActive:false
  }))

  const handleClick=(index)=>{
    const newBoxes = [...boxes];
    newBoxes[index] = {
      isActive:true
    }

    setBoxes(newBoxes)

    setTimeout(()=>{
      setBoxes(prev=>{
        const newList = [...prev];
        newList[index] = {
          isActive:false
        }
        return newList
      })
    },1000)
  }
    
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",width:"100%", height:"100vh"}}>
      <div className='grid-container'>
      {
        boxes.map((box,i)=>(
          <div key={i} style={{backgroundColor: box.isActive ? "green" : "transparent"}} onClick={()=>handleClick(i)}></div>
        ))
      }
    </div>
    </div>
  )
}

export default Grid
