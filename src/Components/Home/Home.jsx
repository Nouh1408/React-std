import { useEffect, useState } from 'react'

export default function Home() {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('Ahmed')
    function increment(){
      setCounter(counter+1)

      
    }
    function changeName(){
      setName('Mohamed')
    }
    function decrement(){
      setCounter(counter-1)

      
    }
    useEffect(()=>{
      console.log("change");
      return function() {
        console.log("byr");
        
      }
    },[counter,name])
  return (
    <div className="bg-info my-5">
        <h2>Home page</h2>
        <p>This is the home page of the application.</p>
        <button className='btn btn-success' onClick={decrement}>Decrement</button>
        <button className='btn btn-danger' onClick={increment}>Inc</button>
        <button onClick={changeName} className='btn btn-light'>Change Name</button>
        <p>name: {name}</p>
        <p>Counter: {counter}</p>
    </div>
  )
}
