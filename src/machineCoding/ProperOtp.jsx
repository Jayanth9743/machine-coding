import React, { useRef, useState } from "react";

const ProperOtp = () => {
  const [otpArray, setOtpArray] = useState(Array(6).fill(""));
  const otpRef = useRef([]);

  const handleOtpChange = (e, index) => {
    if (isNaN(e.target.value) || !e.target.value.trim()) return;
    const newArray = [...otpArray];
    newArray[index] = e.target.value;
    setOtpArray(newArray);
    if (index < 5) {
      otpRef.current[index + 1].focus();
    }
  };

  const handleBackSpace = (e, index) => {
    if (e.key === "Backspace") {
      if (otpArray[index]) {
        const newArray = [...otpArray];
        newArray[index] = "";
        setOtpArray(newArray);
        return;
      }
      if(index > 0){
        otpRef.current[index - 1].focus();
      }
    }
  };

  const optData = otpArray.join("")
  console.log(optData,optData.length === 6);
  

  return (
    <div>
      <h2>otp boi</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {otpArray.map((otp, i) => (
          <input
            type="text"
            key={i}
            ref={(el) => (otpRef.current[i] = el)}
            value={otp}
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "4px",
              textAlign: "center",
            }}
            maxLength={1}
            onChange={(e) => handleOtpChange(e, i)}
            onKeyDown={(e) => handleBackSpace(e, i)}
          />
        ))}
      </div>
      <button>submit</button>
    </div>
  );
};

export default ProperOtp;
