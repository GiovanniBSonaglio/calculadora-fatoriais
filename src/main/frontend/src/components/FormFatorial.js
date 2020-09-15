import React from 'react';

/** 
 * Form para inserção do número a ser calculado
 * 
 * @param props funções e valores necessários para o funcionamento do form
 * @return HTML resultante
 * 
 */
const FormFatorial = (props) => {
  return (
    <div id="form-fatorial">
      <form onSubmit={props.handleFormSubmit} className="form-inline justify-content-center">
        <div className="form-group mb-2">
          <label htmlFor="valor">Número: </label>
          <input
            id="valor"
            value={props.valor}
            type="text"
            name="valor"
            className="form-control"
            onChange={props.handleInputChange}
          />
          <button type="submit" className="btn btn-primary"> Calcular </button>
        </div>
      </form>
    </div>
  );
}

export default FormFatorial;
