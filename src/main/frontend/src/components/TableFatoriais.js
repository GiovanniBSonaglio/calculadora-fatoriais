import React from 'react';
import HistoricoFatoriais from './HistoricoFatoriais';

const TableFatoriais = () => {
    return(
        <table class="table">
            <tbody>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Resultado</th>
                </tr>
                <HistoricoFatoriais/>
            </tbody>
        </table>
    )
}

export default TableFatoriais;