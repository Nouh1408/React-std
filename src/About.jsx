import React, { useState } from 'react'
import Card from './Components/Card/Card';




export default function About() {
  const [msgParent, setMsgParent] = useState("Hambozo")
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState([
    {
      name: 'Asus',
      price: '40000',
      category: 'Laptop',
      onSale: false,
    },
    {
      name: 'Samsung ',
      price: '4000',
      category: 'Computers',
      onSale: true,
    },
    {
      name: 'S10 Lite',
      price: '30000',
      category: 'mobile',
      onSale: true,
    },
    {
      name: 'Huawei Watch fit',
      price: '1000',
      category: 'Wearables',
      onSale: true,
    },
    {
      name: 'Buds live',
      price: '3000',
      category: 'Headphones',
      onSale: false,
    }

  ])
  function changeCounter(amount) {
    setCounter(counter + amount)
  }
  function deleteProduct(){
    alert("Item Deleted")
  }
  return (
    <div>
      <h2>Avout</h2>
      <h3>Counter: {counter}</h3>
      <button className={`btn ${counter > 5 && "bg-danger"}`} onClick={() => changeCounter(1)}>Increment</button>
      <div className="bg-warning container">
        <div className="row">

          {product.map(function (item) {
            return <Card product={item} deleteProduct={deleteProduct} />
          })}

        </div>

      </div>

    </div>

  )
}
