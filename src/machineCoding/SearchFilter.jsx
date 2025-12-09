import React, { useEffect, useMemo, useState } from 'react'

const SearchFilter = () => {
    const users = ["Amit", "Raj", "Jayanth", "Praveen", "Rohit", "Sarthak"];
    const [inputValue, setInputValue] = useState("");
    const [debounceValue, setDebounceValue] = useState("");

    useEffect(()=>{        
        const handle = setTimeout(()=>{
            setDebounceValue(inputValue)
        },500)
        return () => clearTimeout(handle);
    },[inputValue])

    const filterData = useMemo(()=>{
        if(debounceValue.trim() === "") return users;
        return users.filter((user)=>user.toLowerCase().includes(debounceValue.toLowerCase()))
    },[debounceValue])


  return (
    <div>
        <p>search</p>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        {filterData?.map((user,i)=>(<p key={i}>{user}</p>))}
        {filterData.length === 0 && <p>No users found</p>}
    </div>
  )
}

export default SearchFilter
