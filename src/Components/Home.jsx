import { useEffect, useState } from 'react'

export default function Home() {

    const [counter, setCounter] = useState(0)
    useEffect(function(){
        console.log("Welcome");
        setCounter(Math.random)
        return(()=>{
            console.log("Goodbye");
        })
    },[])
  return (
    <div className="bg-info my-5">
        <h2>Home page</h2>
        <p>This is the home page of the application.</p>
        <p>Counter: {counter}</p>
    </div>
  )
}
