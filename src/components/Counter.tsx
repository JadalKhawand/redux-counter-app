import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import { AppDispatch, RootStateType } from '../state/store'
import { decrement, increment, incrementByAmount, DecrementByAmount,incrementAsync } from '../state/counter/CounterSlice';
function Counter() {
  const count = useSelector((state:RootStateType)=>state.counter.value)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className='container'>


    <h2>{count}</h2>

    <div className='first'>
      {/* incrementing and decrementing by 1 */}
      <button className='edited' onClick={()=>dispatch(increment())}>Increment</button>
      <button className='edited' onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    <div className='second'>
      <button className='edited' onClick={()=> dispatch(incrementAsync(10))}>Increment 10</button>
      <button className='edited' onClick={()=> dispatch(DecrementByAmount(10))}>Decrement 10</button>
    </div>


    </div>
  )
}

export default Counter