import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TableFatoriais from './components/TableFatoriais';
import FormFatorial from './components/FormFatorial';

function App() {
  const [inputFatorialState, setInputFatorialState] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/api/fatorial", {
        valor: inputFatorialState.valor,
        validateStatus: () => true
    })
    .then(res => {
      //render(element, document.getElementById('App'));
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.errors[0].defaultMessage);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
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
      <div className="container">
        <div className="col-12 col-sm-10 col-8">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="title text-center"> Calculadora de Fatoriais </div>
              <div className="text"> 
                Insira um número abaixo para calcular seu fatorial. Se o resultado tiver mais do que 9 digitos, utilizaremos a notação exponencial. Abaixo do formulário há uma tabela com o histórico de fatoriais calculados, ordenados do mais novo para o mais antigo. 
                <div className="limitacoes">
                  Limitações:
                  <ul>
                    <li> Não é possível calcular fatoriais de números negativos; </li>
                    <li> Não é possível calcular fatoriais de números não inteiros; </li>
                    <li> Por uma escolha arbitrária, o maior n possível de ser calculado é 807. </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="formula">
                Fórmula: <br></br>
                <img src="/images/formula.svg" alt="Fórmula para cálculo de um fatorial" title="Fórmula para cálculo de um fatorial"></img>
              </div>
            </div>
            <div className="col-12">
              <FormFatorial
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                numero={inputFatorialState.valor}
                />
            </div>
            <div className="col-12 col-md-6 text-center">
              <TableFatoriais items={inputFatorialState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
