import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import apiService from "../functions/AjaxFunction";

function ModalComponent({registrationMessage, setRegistrationMessage}) {

    const [showModal, setShowModal] = useState(false);
    const [modalFormData, setModalFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: '',
    });

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setModalFormData({...modalFormData, [name]: value});
    };

    const handleModalFormSubmit = (e) => {
        // Perform Axios request to send data to the backend
        e.preventDefault();
        //setRegistrationMessage(true)
        apiService.registration(modalFormData).then((response) => {
            response.data === true ? setRegistrationMessage(true) : setRegistrationMessage(false)
        })

        console.log('Dati del form di registrazione:', modalFormData);
        // Resetta i campi del form
        setModalFormData({
            nome: '',
            cognome: '',
            email: '',
            password: ''
        });
    };

    return (
        <div className={"pt-2"}>
            <Button variant="secondary" onClick={handleOpenModal}>
                Registrazione
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrazione</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleModalFormSubmit}>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" name="nome" placeholder="Name" value={modalFormData.nome}
                                              onChange={handleInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formBasicSurname">
                                <Form.Label>Cognome</Form.Label>
                                <Form.Control type="text" name="cognome" placeholder="Surname"
                                              value={modalFormData.cognome} onChange={handleInputChange}/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email" value={modalFormData.email}
                                          onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password"
                                          value={modalFormData.password} onChange={handleInputChange}/>
                        </Form.Group>
                        {registrationMessage && <h6 className={"text-success"}>Registrazione avvenuta con successo</h6>}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Chiudi
                            </Button>
                            <Button variant="primary" type="submit">
                                Registrati
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )

}

export default ModalComponent;