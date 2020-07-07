import React, { useState } from 'react'
import Form from './Components/Form'
import ProductsList from './Components/ProductsList'

function App() {
  const [products, setProducts] = useState([])
  return (
    <>
      <Form onFormSubmit={handleProducts} />
      <ProductsList products={products} />
    </>
  )
  function handleProducts(product) {
    setProducts([...products, product])
  }
}

export default App
