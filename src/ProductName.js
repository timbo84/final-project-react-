import { useEffect, useState } from 'react';
import axios from 'axios'

function ProductName() {
  let [name, setName] = useState("unknown")

  useEffect(() => {
    async function getName() {
      const response = await axios.get("http://localhost:3001/products/1")
      setName(response.data.name)
    }
    getName()
  }, [])

  return (
    <p>ProductName: {name}</p>
  )
}

export default ProductName;