import {Container, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import apiService from "../functions/AjaxFunction";
const comunications = require("../components/mock/comunications.json");

function Homepage(){

    /*const [comunications, setComunications] = useState(null)

    useEffect(() => {
        apiService.getComunications().then((response) => {
            response.data !== "" ?
                setComunications(response.data) : setComunications(null);

        })

    }, [])*/

    return(
        <Container className={"p-5"}>
            <h2>Comunicazioni</h2>
            <ListGroup className={"mt-3"}>
                {comunications && comunications.map(c =>
                    <ListGroup.Item>{c.date} - {c.text}</ListGroup.Item>
                )}
            </ListGroup>
        </Container>
    )

}
export default Homepage;