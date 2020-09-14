import React from 'react';

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
        </div>
        <button type="submit" className="btn btn-primary"> Calcular </button>
      </form>
    </div>
  );
}

export default FormFatorial;
