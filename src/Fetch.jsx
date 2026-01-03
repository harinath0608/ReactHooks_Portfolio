import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [products,setProducts] = useState([])
    // const [loading,setLoading] = useState(true)

    useEffect(()=> {

        let fetchedProducts = async() => {
            let response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data)
        }
        fetchedProducts()
        // setLoading(false)

    },[])

  return (
        <>

        <h1> Products </h1>

        {products.map((item) => (
            <div key={item.id}>
                <h3> {item.title} </h3>
                <img style={{}} src={item.image} alt="image" />
                <p> {item.description} </p>
            </div>
        ))}
        
        </>
  )
}

export default Fetch
