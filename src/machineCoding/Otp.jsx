import React, { useRef, useState } from 'react'

const Otp = () => {
    const [otp, setOtp] = useState(Array(6).fill(""))
    const otpRef = useRef([])

    const handleChange=(value,i)=>{
        if(isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[i]=value
        setOtp(newOtp)

        if(i<5 && value){
            otpRef.current[i + 1].focus()
        }
    }

    const handleKeyDown=(e,i)=>{
        if(e.key === "Backspace" && i > 0 && !otp[i]){
            otpRef.current[i - 1].focus()
        }        
    }

    console.log(otpRef);
    

  return (
    <div>
      {otp.map((data,i)=>(
        <input type="text" maxLength={1} key={i} ref={(el)=>otpRef.current[i] = el} value={data} onChange={(e)=>handleChange(e.target.value, i)} onKeyDown={(e)=>handleKeyDown(e,i)}  />
      ))}
    </div>
  )
}

export default Otp
