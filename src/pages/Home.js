import { Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <>
            <Container className="col-10 col-sm-12 bg-success mt-5 banner">
                <Row className="text-center">
                    <Col className="banner-text">
                    <h1 className="text-light mb-3 banner-highlights">View our weather for today</h1>
                    <Button className="bg-dark" as={Link} to="/weather">Click here</Button>
                    </Col>
                </Row>
            </Container>


        </>
    )
}