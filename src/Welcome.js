import React, { useEffect, useContext, useState } from 'react';
import { ProductContext } from './ProductContext'
import {Card, Row, Col, Stack} from "react-bootstrap"
import { Link, Outlet } from 'react-router-dom'


function Greeting() {
    let [products, setProducts] = useState([])
    let { sortProduct } = useContext(ProductContext)
    useEffect(() => {

        async function fetch() {
            await sortProduct().then(response => {                                                    
                setProducts(response)
            })
        }
        fetch();

    }, [])
    function productList() {

        if (products === null || !products) return
        return products.map((p) =>
            <Col md={4}>
                <Card bg="info" text="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p.img_url} alt="" />
                    <Card.Body>
                        <Card.Title>{p.productName}</Card.Title>
                        <Card.Subtitle className="mb-2 ">$ {p.price}</Card.Subtitle>
                        <Link to={`/products/${p.id}`} className="btn btn-warning mx-3">View</Link>
                    </Card.Body>
                </Card>
            </Col>
        ) }

    return (
    <>
        <h1>
            Welcome To FakeBros! Where What You See Is What You Don't Get
            <br />
            ...Because Everything Is Made Up! Have Fun!
        </h1>
    <>
    <Stack>
    <Row xs={1} md={4} className="g-4">
     {productList()}
    </Row>
    <Outlet />
    </Stack>
    </>
    </>
    )
}
export default Greeting