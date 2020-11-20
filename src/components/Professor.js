import React, { Component } from 'react';
import requisicao from '../Api'
import '../style/Geral.css'
import { Table } from 'reactstrap';

export default class Professor extends Component {
    state = {
        dados: []
    }

    async componentDidMount() {
        const retorno = await requisicao.get('professores');
        this.setState({ dados: retorno.data });
    }

    render() {
        const { dados } = this.state;
        return (
            <div id="lista">
                <Table dark striped hover responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>E-Mail</th>
                            <th>R.A</th>
                            <th>Senha</th>
                        </tr>
                    </thead>

                    {dados.map(usr => (
                        <tbody>
                            <tr id={usr.Id} key={usr.Id}>
                                <th scope="row">{usr.Id}</th>
                                <td className="nome">{usr.Nome}</td>
                                <td className="email">{usr.Email}</td>
                                <td className="ra">{usr.Ra}</td>
                                <td className="senha">{usr.Senha}</td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        );
    }

}