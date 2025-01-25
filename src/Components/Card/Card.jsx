import React from 'react'

export default function card({ product }) {

  return (
    <div className="col-md-4 p-2 rounded ">
      <div className="card p-2">
      <div className=' bg-info'>
        <h4>pName:{product.name}</h4>
        <h4>pPrice: {product.price}</h4>
        <h4>pCategory: {product.category}</h4>
        <h4>pSale: {product.onSale}</h4>
        <button className='btn btn-danger w-100'>Delete Product</button>
      </div>
      </div>
      </div>
  )
}
