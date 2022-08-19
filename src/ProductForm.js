import { useState, useContext, useEffect } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext'

function ProductForm() {
  let params = useParams()
  let [ product, setProduct ] = useState({
    id: params.productId,
    productName: "",
    description: "",
    price: "",
    calories: ""
    
  })

  let { getProduct, addProduct, updateProduct} = useContext(ProductContext)
  let navigate = useNavigate()
  let { id, productName, description, price, img_url, calories} = product

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getProduct(id)
        .then((product) => setProduct(product))
    }
    fetch()
  }, [id])

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addProduct(product)
    } else {
      return updateProduct(product)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    addOrUpdate().then((product) =>
      navigate(`/products`)
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="productName" value={productName} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" value={description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" value={price} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Calories</Form.Label>
        <Form.Control type="text" name="calories" value={calories} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" name="img_url" value={img_url} placeholder="enter an Image Url" onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  )
}

export default ProductForm