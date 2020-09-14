import React from 'react';

const FormFatorial = (props) => {
  return (
    <div id="form-fatorial" class="form-inline justify-content-center">
      <form onSubmit={props.handleFormSubmit}>
        <div class="form-group mb-2">
          <label htmlFor="valor">Número: </label>
          <input
            id="valor"
            value={props.valor}
            type="text"
            name="valor"
            class="form-control"
            onChange={props.handleInputChange}
          />
          <button type="submit" class="btn btn-primary"> Calcular </button>
        </div>
      </form>
    </div>
  );
}

export default FormFatorial;
