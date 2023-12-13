import React, { useEffect, useState } from 'react'

const TimeStamp = () => {
    const[time,setTime]= useState(new Date().toLocaleString([],{hour:'numeric',hour12:'true', minute:'numeric',second:'numeric'}))
    console.log(time)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString([],{
                hour: 'numeric',
                hour12:'true',
                minute : 'numeric',
                second:'numeric'
            }))
        },1000)
        return ()=> clearInterval(interval)
    },[])
    
  return (
    <div> {time} </div>
  )
}

export default TimeStamp