import React, { useState } from 'react'

const Paginataion = () => {
    const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    const [currentIndex, setCurrentIndex] = useState(1)
    const itemsPerPage = 10;

    const startIndex = (currentIndex - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = items.slice(startIndex,endIndex)

    const totalPages = Math.ceil(items.length / itemsPerPage)

  return (
    <div>
      {currentItems?.map((item,i)=>(<p key={i}>{item}</p>))}
      {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i + 1)}
            style={{
              margin: "5px",
              padding: "5px 10px",
              background: currentIndex === i + 1 ? "lightblue" : "white"
            }}
          >
            {i + 1}
          </button>
        ))}
    </div>
  )
}

export default Paginataion
