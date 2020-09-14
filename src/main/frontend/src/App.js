import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TableFatoriais from './components/TableFatoriais';
import FormFatorial from './components/FormFatorial';

function App() {
  const [inputFatorialState, setInputFatorialState] = useState([]);

  const handleFormSubmit = (event) => {
    axios.post("http://localhost:8080/api/fatorial", {
        valor: inputFatorialState.valor,
    })
    .then(res => {
      setInputFatorialState(res.data);
    });
  };

  const handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    setInputFatorialState({
      [name]: value,
    });
  };

  return (
    <div className="App">
      <div class="container expand-container">
        <div class="col-12 col-sm-10 col-8 d-flex justify-content-center">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="title text-center"> Calculadora de Fatoriais </div>
              <div class="text"> 
                Insira um número abaixo para calcular seu fatorial. Se o resultado tiver mais do que 9 digitos, utilizaremos a notação exponencial. Abaixo do formulário há uma tabela com o histórico de fatoriais calculados, ordenados do mais novo para o mais antigo. 
                <div class="limitacoes">
                  Limitações:
                  <ul>
                    <li> Não é possível calcular fatoriais de números negativos; </li>
                    <li> Não é possível calcular fatoriais de números não inteiros; </li>
                    <li> Por uma escolha arbitrária, o maior n possível de ser calculado é 807. </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="formula">
                Fórmula: <br></br>
                <img src="/images/formula.svg"></img>
              </div>
            </div>
            <div class="col-12">
              <FormFatorial
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                numero={inputFatorialState.valor}
                />
            </div>
            <div class="col-6 text-center">
              <TableFatoriais items={inputFatorialState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
