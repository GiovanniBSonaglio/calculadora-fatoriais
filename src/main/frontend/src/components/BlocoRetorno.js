import React from 'react';

/** 
 * Bloco para comunicação do retorno da API
 * 
 * @param retornoAPIState State informações do retorno
 * @return HTML resultante
 * 
 */
const BlocoRetorno = (retornoAPIState) => {
    if(retornoAPIState.props.status === 'none'){
        return null;
    }else if(retornoAPIState.props.status === 'sucess'){
        return (
            <div className="resultado bg-primary text-white">
                {retornoAPIState.props.valor}! = {retornoAPIState.props.resultado}
            </div>
        )
    }else{
        return (
            <div className="resultado bg-danger text-white">
                {retornoAPIState.props.mensagem}
            </div>
        )
    }
}

export default BlocoRetorno;