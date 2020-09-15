import React from 'react';

/** 
 * Linhas da tabela de historico de fatoriais
 * 
 * @param props State com o resultado do get da api
 * @return HTML resultante
 * 
 */
const HistoricoFatoriais = (props) => {
  let fatoriais = props.props;

  if(fatoriais.props !== undefined){
    // Vamos usar um map para gerar cada linha a partir do array de items do state
    return fatoriais.props.items.map((fatorialState, index) => {
      let id = fatoriais.props.items.length-(index);
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{fatorialState.valor}</td>
          <td>{fatorialState.resultado}</td>
        </tr>
      );
    });
  }else{
    // Não puxou nada da API (mock db ainda vazio)
    return (
      <tr></tr>
    );
  }
};

export default HistoricoFatoriais