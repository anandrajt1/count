import React, { useState } from 'react'

function Counter() {
    // count is a variable,setCount is a function used to change count, useState(0) means initial value of count variable is 0

    const[count,setCount]=useState(0) 

    //funtion to increase the count by +1
    function addOne(){
        //using setCount to increase count by+1
        setCount(count+1)
    }

    //functn to decrease the count by -1
    function minusOne(){
        setCount(count-1)
    }


  return (
    <>
   <div className='flex flex-row items-center mt-36 w-24 mx-auto p-8 gap-9'>
   <button onClick={minusOne} className='p-6 bg-slate-600 rounded-full text-2xl font-bold text-white'>-</button>
    <h1 className='text-3xl'>{count}</h1>
    <button onClick={addOne} className='p-6 bg-slate-600 rounded-full text-2xl font-bold text-white'>+</button>
   </div>
    </>
  )
}

export default Counter