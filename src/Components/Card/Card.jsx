import React from 'react'

export default function card({ 
  product,
  deleteProduct,
  updatePrice 
}) {

  return (
    <div className="col-md-4 p-2 rounded ">
      <div className="card p-2">
        <div className=' bg-info position-relative'>
          <h2 className="text-center">Card</h2>

          {
            product.onSale && ( <span className="position-absolute end-0 top-0 p-2 text-white rounded bg-primary ">OnSale</span>) 
          }
          <h4>pName:{product.name}</h4>
          <h4 className={`${product.price>2000 && "bg-danger"}`}>pPrice: {product.price}</h4>
          <h4>pCategory: {product.category}</h4>
          <h4>pSale: {product.onSale}</h4>
          <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger w-100'>Delete Product</button>
          <button onClick={()=>updatePrice(product.price)} className='btn btn-success w-100'>Update Product</button>
        </div>
      </div>
    </div>
  )
}
