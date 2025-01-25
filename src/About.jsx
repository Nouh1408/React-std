import React, { useState } from 'react'
import Card from './Components/Card/Card';




export default function About() {
  const [msgParent, setMsgParent] = useState("Hambozo")
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState([
    {
      name: 'Asus ROG',
      price: '50k',
      category: 'Laptop',
      onSale: true,
    },
    {
      name: 'Samsung Odyssy G5',
      price: '4k',
      category: 'Computers',
      onSale: true,
    },
    {
      name: 'S10 Lite',
      price: '30k',
      category: 'mobile',
      onSale: true,
    },
    {
      name: 'product name',
      price: '3000',
      category: 'category',
      onSale: true,
    },
    {
      name: 'product name',
      price: '3000',
      category: 'category',
      onSale: true,
    }

  ])
  function changeCounter(amount) {
    setCounter(counter + amount)
  }
  return (
    <div>
      <h2>Avout</h2>
      <h3>Counter: {counter}</h3>
      <button className={`btn ${counter > 5 && "bg-danger"}`} onClick={() => changeCounter(1)}>Increment</button>
      <div className="bg-warning container">
        <div className="row">

          {product.map(function (item) {
            return <Card product={item} />
          })}

        </div>

      </div>

    </div>

  )
}
