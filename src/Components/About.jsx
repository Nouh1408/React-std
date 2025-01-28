import React, { useState } from 'react'
import Card from './Card/Card';




export default function About() {
  const [msgParent, setMsgParent] = useState("Hambozo")
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState([
    {
      id:0,
      name: 'Asus',
      price: '40000',
      category: 'Laptop',
      onSale: false,
    },
    {
      id:1,
      name: 'Samsung ',
      price: '4000',
      category: 'Computers',
      onSale: true,
    },
    {
      id:2,
      name: 'S10 Lite',
      price: '30000',
      category: 'mobile',
      onSale: true,
    },
    {
      id:3,
      name: 'Huawei Watch fit',
      price: '1000',
      category: 'Wearables',
      onSale: true,
    },
    {
      id:4,
      name: 'Buds live',
      price: '3000',
      category: 'Headphones',
      onSale: false,
    }

  ])
  function changeCounter(amount) {
    setCounter(counter + amount)
  }
  function deleteProduct(pId){
    // alert("Item Deleted")
    let deepCopy = structuredClone(product)
      deepCopy=deepCopy.filter(function(p){//important to use deepcopy = 
      return p.id != pId
    })

    setProduct(deepCopy)


    function updatePrice(pId){
      let deepProducts = structuredClone(product)
      deepProducts = deepProducts.map(function(p){ //not important to use deepcopy =
        if(p.id == pId){
          p.price +=50
        }
        return p
      })
      setProduct(deepProducts)
    }
  return (
    <div>
      <h2>Avout</h2>
      <h3>Counter: {counter}</h3>
      <button className={`btn ${counter > 5 && "bg-danger"}`} onClick={() => changeCounter(1)}>Increment</button>
      <div className="bg-warning container">
        <div className="row">

          {product.map(function (item) {
            return <Card key={item.id} updatePrice={updatePrice} product={item} deleteProduct={deleteProduct} />
          })}

        </div>

      </div>

    </div>

  )
  }
}