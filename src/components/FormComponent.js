import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useState} from "react";
import apiService from "../functions/AjaxFunction";

function FormComponent({loginMessage, setLoginMessage}){

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //setLoginMessage("false")
        apiService.login(formData).then((response) => {
            response.data === true ?
                setLoginMessage("true") :
                setLoginMessage("false")

        })
        console.log('Dati del form di login:', formData);
        // Resetta i campi del form
        setFormData({
            email: '',
            password: '',
        });
    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Accedi
            </Button>
            {loginMessage === "false" && <h6 className={"mt-2 text-danger"}>Username o Password errati</h6>}
        </Form>
    )

}
export default FormComponent;