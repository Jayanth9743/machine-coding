import { useEffect, useRef, useState } from "react"
import Button from "./button"
import Learn from "./machineCoding/Learn"
import FolderData from "./FolderData"
import FolderStructure from "./machineCoding/FolderStructure"
import Otp from "./machineCoding/Otp"
import Grid from "./machineCoding/Grid"
import TodoList from "./machineCoding/TodoList"
import SearchFilter from "./machineCoding/SearchFilter"
import Paginataion from "./machineCoding/Paginataion"
import WebSocketPage from "./machineCoding/WebSocket"


function App() {

  const [page, setPage] = useState(1)
  const [addressData, setAddressData] = useState([])
  const [hasMore, setHasMore]= useState(true)
  // const [isLoading, setLoading] = useState()
  const infiniteRef = useRef()

  

  // const fetchData = async()=>{
  //   const res = await fetch(`https://fakerapi.it/api/v2/addresses?_quantity=40&_page=${page}`)
  //   const data = await res.json()
  //   console.log(data.data);
    
  //  if(data.data.length !== 0){
  //   setAddressData((prev)=>[...prev,...data.data])
  //  }else{
  //   setHasMore(false)
  //   console.log("done");
    
  //  }
  // }

  // useEffect(()=>{
  //   fetchData()
  // },[page])

  useEffect(()=>{
    const observerEnter=(enteris)=>{
      const [entry] = enteris;
      if(entry.isIntersecting && hasMore){
        setPage((prev)=>prev+1)
        console.log("observing");
        
      }
    }

    const observer = new IntersectionObserver(observerEnter,{
      threshold:0.1,
      root:null,
      // rootMargin
    })

    if(infiniteRef.current){
      observer.observe(infiniteRef.current)
    }

    return ()=>{
      if (infiniteRef.current) {
        observer.unobserve(infiniteRef.current);
      }
    }
  },[hasMore,addressData])
 


  return (
    <>
      {/* <Button/> */}
      {/* <div className="grid-container">
        <div className="items-card">item1</div>
        <div className="items-card">item2</div>
        <div className="items-card">item3</div>
      </div> */}
      {/* <h1>this react query</h1> */}
      {/* <ul>
        {addressData.map((address,i)=>(<li key={i} ref={i === addressData.length - 1 ? infiniteRef : null} style={{color:"black"}}>{address.city}</li>))}
      </ul> */}
      {/* <div ref={infiniteRef} style={{ height: "20px", background: "transparent" }}/> */}
      {/* <Learn /> */}
      {/* <FolderStructure folderData={FolderData} /> */}
      {/* <Otp/> */}
      {/* <Grid/> */}
      {/* <TodoList/> */}
      {/* <SearchFilter/> */}
      {/* <Paginataion/> */}
      <WebSocketPage/>
    </>
  )
}

export default App
