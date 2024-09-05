import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [power, setPower] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  const incrementPower = () => {
    setPower(power * 2);
  }

  const decrementPower = () => {
    setPower(power / 2);
  }

  const updatePowerAndCountIncrement = () => {
    incrementPower();
    incrementCount();
  }

  const updatePowerAndCountDecrement = () => {
    decrementPower();
    decrementCount();
  }
  return (
    <>
      <div className="main-wrapper">
      <div className="instruction">
      <p><code>Click the button below and check the value of 2 raised to the power of different numbers.</code></p>
      </div>
      <div>
        <button className='btn-update' onClick={updatePowerAndCountIncrement} >Increase</button>
        <button className='btn-update' onClick={updatePowerAndCountDecrement} >Decrease</button>

        </div>
      {/* <div className='output-update'>
        <span className='base'>2</span> <sup ><span className='index'>{count}</span> </sup>&nbsp; = <span className='output'> &nbsp; {power} </span>
      </div> */}

      <div className='output-update'>
        <div className='base'>2</div>
        <div className='index'>{count}</div> 
        <div className='equal'>=</div> 
        <div className='output'>{power} </div>
      </div>
      
      </div>
    </>
  )
}
export default App