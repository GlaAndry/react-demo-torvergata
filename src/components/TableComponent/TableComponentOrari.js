import {useState} from "react";
import {Button, Container, Form, Modal, Table} from "react-bootstrap";

function TableComponentOrari(){
    const am = "Analisi del Malware"
    const csw = "Costruzione del Software"
    const fidt = "Filosofia della tecnica: fondamenti e implicazioni sociali"
    const itp = "Internet Technology and Protocols"
    const ml = "Machine Learning"
    const nlp = "Natural Language Processing"
    const psast = "Processi Stocastici e Analisi di Serie Temporali"
    const scpa = "Sistemi di Calcolo Parallelo e Applicazioni"
    const soa = "Sistemi Operativi Avanzati e Sicurezza dei Sistemi"
    const tgd = "Teoria dei Giochi e business analytics"
    const nsd = "Networks and Systems Defense"

    return (
            <Table striped bordered hover className={"mt-3"}>
                <thead>
                <tr>
                    <th>Orario</th>
                    <th>Lunedì</th>
                    <th>Martedì</th>
                    <th>Mercoledì</th>
                    <th>Giovedì</th>
                    <th>Venerdì</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>8.30/9.15</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>9.30/10.15</td>
                    <td>{nsd}</td>
                    <td>{am}/ <br/>{itp}</td>
                    <td>{ml}</td>
                    <td>{am}/ <br/>{scpa}/ <br/>{tgd}</td>
                    <td>{tgd}</td>
                </tr>
                <tr>
                    <td>10.30/11.15</td>
                    <td>{nsd}</td>
                    <td>{am}/ <br/>{itp}</td>
                    <td>{ml}</td>
                    <td>{am}/ <br/>{scpa}/ <br/>{tgd}</td>
                    <td>{tgd}</td>
                </tr>
                <tr>
                    <td>11.30/12.15</td>
                    <td>{itp}/ <br/>{soa}</td>
                    <td>{ml}</td>
                    <td>{soa}</td>
                    <td>{csw}/ <br/>{fidt}</td>
                    <td>{ml}</td>
                </tr>
                <tr>
                    <td>12.30/13.15</td>
                    <td>{itp}/ <br/>{soa}</td>
                    <td>{ml}</td>
                    <td>{soa}</td>
                    <td>{csw}/ <br/>{fidt}</td>
                    <td>{ml}</td>
                </tr>
                <tr>
                    <td>14:00/14.45</td>
                    <td>{psast}/ <br/>{scpa}</td>
                    <td>{scpa}</td>
                    <td>{tgd}</td>
                    <td>{soa}</td>
                    <td>{psast}/ <br/>{itp}</td>
                </tr>
                <tr>
                    <td>15:00/15.45</td>
                    <td>{psast}/ <br/>{scpa}</td>
                    <td>{scpa}</td>
                    <td>{tgd}</td>
                    <td>{soa}</td>
                    <td>{psast}/ <br/>{itp}</td>
                </tr>
                <tr>
                    <td>16:00/16.45</td>
                    <td>{csw}/ <br/>{fidt}</td>
                    <td>{nlp}/ <br/>{nsd}</td>
                    <td>{nlp}/ <br/>{nsd}</td>
                    <td>{nlp}</td>
                    <td>{nlp}</td>
                </tr>
                <tr>
                    <td>17:00/17.45</td>
                    <td>{csw}/ <br/>{fidt}</td>
                    <td>{nlp}/ <br/>{nsd}</td>
                    <td>{nlp}/ <br/>{nsd}</td>
                    <td>{nlp}</td>
                    <td>{nlp}</td>
                </tr>
                <tr>
                    <td>18:00/18.45</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
    );
}
export default TableComponentOrari;