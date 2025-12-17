import React, { useState } from 'react'

const RegularForm = () => {
    const [formData, setFormData] = useState({
        name:"",
        address:"",
        hobbies:[]
    })

    const handdleKeyDown=(e)=>{

        if(e.key === "Enter"){
            console.log("enter clicked");
            
            setFormData((prev)=>({
                ...prev,
                hobbies:[...prev.hobbies,e.target.value]
            }))

            e.target.reset()
            
        }
    }

    console.log(formData);
    

    

    // const handleSubmit =(e)=>{
    //     e.preventDefault();
    //         console.log(formData);
    // }
  return (
    <div>
      <input type="text" name='name' onKeyDown={(e)=>handdleKeyDown(e)} />
      <input type="text" name='address'/>
      <button>submit</button>
    </div>
  )
}

export default RegularForm
