import {Card, Button, Spinner, Alert, Offcanvas} from "react-bootstrap"
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import { useContext, useState, useEffect } from 'react'


function Product() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    let params = useParams()
    let navigate = useNavigate()

    let { getProduct, deleteProduct } = useContext(ProductContext)
    let [product, setProduct] = useState()

    let [error, setError] = useState()

    useEffect(() => {

        if (params.productId) {
            setShow(true)
        } else {
            setShow(false)
        }

        setError(null)
        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
                .catch((message) => setError(message))
        }
        fetch()
    }, [params.productId, getProduct])

    function errorMessage() {
        return <Alert variant="danger">There was an error attempting to load this product: {error}</Alert>
    }

    useEffect(() => {
        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
        }
        fetch()
    }, [params.productId]);

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
    }

    function productCard() {


        let { id, productName, description, price, img_url, calories } = product
        return (
            <>

                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>PRODUCT</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Card bg="success" text="light" className="align-self-start ">
                            <Card.Img variant="top" src={img_url} alt="" />
                            <Card.Body>
                                <Card.Title>{productName}</Card.Title>
                                <Card.Subtitle className="mb-2 ">$ {price}</Card.Subtitle>
                                <Card.Text>
                                    <strong>{description}</strong>
                                    <br/>
                                    <strong>Calories={calories}</strong>
                                </Card.Text>
                                <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                                <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        )
    }
    if (error) return errorMessage()
    if (product === undefined) return loading()
    return product.id !== parseInt(params.productId) ? loading() : productCard()
}

export default Product