import React, { useState } from 'react'

const Colorchanger = () => {
    const [color,setColor] =useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor :color}}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 border-r-4 bg-red-300 inset-x-0 px-2 mx-5 ">
            <button className="flex-wrap rounded-r-md py-3 my-3" style={{backgroundColor:'red'}} >red</button>
            </div>
    </div>
  )
}

export default Colorchanger