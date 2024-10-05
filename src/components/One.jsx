import React, { useState } from 'react'
import Two from './Two'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Slice/counterSlice'

const One = () => {

    const sliceData = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

  return (
    <>

     <button onClick={()=> dispatch(increment())}>+</button>

       <h1>Value - {sliceData} </h1>

     <button onClick={()=> dispatch(decrement())}>-</button>
    
    </>
  )
}

export default One
