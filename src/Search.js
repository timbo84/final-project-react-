import React, { useEffect, useContext, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import { Card, Container, Row, Col } from "react-bootstrap"


function Search() {
    let { searchProduct } = useContext(ProductContext)
    let [products, setProducts] = useState([])
    let params = useParams();
    console.log(params.filter)
    searchProduct(params.filter)

    useEffect(() => {

        async function fetch() {
            await searchProduct(params.filter).then(response => {                                                    
                setProducts(response)
            })
        }
        fetch();

    }, [params])



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

        )
    }

    return (
        <>
            <h1>Products</h1>
            <Container fluid>
                <Row>
                    {productList()}
                </Row>
                <Outlet />
            </Container>
        </>
    )

}


export default Search;