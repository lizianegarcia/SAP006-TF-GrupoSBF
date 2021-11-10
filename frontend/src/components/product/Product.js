import { React, useEffect, useState } from 'react';
import { getProducts } from '../../services';
import Rating from './Rating';
import './product.css';

const Product = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getPromos() {
      const product = await getProducts()
      setProducts(product)
      return product
    }
    getPromos()
  }, []);


  return (

    <div className="grid-container">
      {products.map((items) => (
        <div key={items.id} className="card">
          <div>
            <p className="discount"> {items.discount === "null" ? '' : items.discount}</p>
            <img className="img" src={items.image} alt={items.name} />
          </div>
          <div>
            <p className="shipping"> {items.freeShipping === "true" ? '' : (<p>Frete Grátis</p>)}</p>
          </div>
          <div className="card-body">
            <h2>{items.name}</h2>
            <p className="price">
              R$ {items.price}
            </p>
            <p className="old-price"> {items.oldPrice === "null" ? '' : items.oldPrice}</p>
            {/* <Rating /> */}

            <h3>{items.colors} cores</h3>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Product
