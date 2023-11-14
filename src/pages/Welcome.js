import {Col, Container} from "react-bootstrap";

function Welcome(){

    return(
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Col className={"text-center"}>
                <h1>Benvenuti nella lezione di React</h1>
                <p>Esempio di progetto React</p>
            </Col>
        </Container>
    )

}
export default Welcome;