import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import {Card, Row, Col, Stack} from "react-bootstrap"

function ProductList() {
  
  function productList(products) {
    
    if (products === null) return
    return products.map((p) =>
    
    <Col >
    <Card bg="info" text="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p.img_url} alt=""/>
            <Card.Body>
            <Card.Title>{p.productName}</Card.Title>
            <Card.Subtitle className="mb-2 ">$ {p.price}</Card.Subtitle>
            <Link to={`/products/${p.id}`}className="btn btn-warning mx-3">View</Link>
            </Card.Body>
      </Card>
    </Col>
    
    )
  }

  return (
    <>
        <h1>Products</h1>
        <Stack>
        <Row xs={1} md={4} className="g-4">
        <ProductContext.Consumer>
        {({products}) => (
            productList(products)
        )}
        </ProductContext.Consumer>
        </Row>
        <Outlet />
        </Stack>
    </>
  )
}

export default ProductList