import {Container} from "react-bootstrap";
import FormComponent from "../components/FormComponent";
import ModalComponent from "../components/ModalComponent";
import {useState} from "react";

function Login(){

    const [loginMessage, setLoginMessage] = useState(null)
    const [registrationMessage, setRegistrationMessage] = useState(false)

    return(
        <Container className={"p-5"} style={{ display: 'block', width: 700, padding: 30 }}>
            <h2 className={"text-center"}>Login Docente</h2>
            {
                loginMessage === "true" ?
                <h3 className={"text-center mt-5"}>Login avvenuto con successo</h3> :
                <>
                    <FormComponent loginMessage = {loginMessage} setLoginMessage = {setLoginMessage}/>
                    <ModalComponent registrationMessage = {registrationMessage} setRegistrationMessage = {setRegistrationMessage}/>
                </>
            }

        </Container>
    )

}
export default Login;