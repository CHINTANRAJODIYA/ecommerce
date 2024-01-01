import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Rickyapi() {

    const [dataa, setdataa] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                setdataa(res.data.results);
                console.log(res.data.results);
            })
    })

    return (
        <>
            <Container>
                <Row>
                        {
                            dataa.map((item) => {
                                return (
                                    <>
                                    <Col lg={4}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                    {item.species}
                                                </Card.Text>
                                                <Button variant="primary">{item.status}</Button>
                                            </Card.Body>
                                        </Card>
                    </Col>
                                    </>
                                )
                            })
                        }

                </Row>
            </Container>
        </>
    )
}

export default Rickyapi