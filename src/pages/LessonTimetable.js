import {Container} from "react-bootstrap";
import TableComponentOrari from "../components/TableComponent/TableComponentOrari";

function LessonTimetable(){

    return(
        <Container className={"p-5"}>
            <h2>Orario lezioni</h2>
            <TableComponentOrari/>
        </Container>
    )

}
export default LessonTimetable;