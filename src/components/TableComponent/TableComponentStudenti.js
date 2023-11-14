import {useState} from "react";
import {Button, Container, Form, Modal, Table} from "react-bootstrap";

function TableComponentStudenti({data}){

    return (
            <Table striped bordered hover className={"mt-3"}>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Codice fiscale</th>
                </tr>
                </thead>
                <tbody>

                {data && data.map(d=> (
                    <tr>
                        <td>{d.nome==="" ? "Nan" : d.nome}</td>
                        <td>{d.cognome==="" ? "Nan" : d.cognome}</td>
                        <td>{d.codiceFiscale==="" ? "Nan" : d.codiceFiscale}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
    );
}
export default TableComponentStudenti;