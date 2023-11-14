import {Container, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import apiService from "../functions/AjaxFunction";
import TableComponentOrari from "../components/TableComponent/TableComponentOrari";
import TableComponentStudenti from "../components/TableComponent/TableComponentStudenti";
const comunications = require("../components/mock/comunications.json");

function StudentPage(){

    const [students, setStudents] = useState(null)

    useEffect(() => {
        apiService.getStudents().then((response) => {
            response.data !== "" ?
                setStudents(response.data) : setStudents(null);

        })

    }, [])

    return(
        <Container className={"p-5"}>
            <h2>Studenti</h2>
            {students && <TableComponentStudenti data={students} />}
        </Container>
    )

}
export default StudentPage;