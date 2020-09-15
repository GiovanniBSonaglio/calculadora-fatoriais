import React from 'react';
import HistoricoFatoriais from './HistoricoFatoriais';

/** 
 * Tabela com o histórico dos fatoriais
 * 
 * @param props State com o resultado do get da api que será repassado para o HistoricoFatoriais
 * @return HTML resultante
 * 
 */
const TableFatoriais = (props) => {
    return(
        <table className="table">
            <tbody>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Resultado</th>
                </tr>
                <HistoricoFatoriais props={props}/>
            </tbody>
        </table>
    )
}

export default TableFatoriais;