import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TableFatoriais from './components/TableFatoriais';
import FormFatorial from './components/FormFatorial';

/** 
 * App principal
 * 
 * @return HTML resultante da página
 * 
 */
function App() {
  // State para armazenamento do historico de fatoriais calculados
  const [historicoFatoriaisState,setHistoricoFatoriaisState] = useState()

  /**
   * Busca o historico de fatorias utilizando a API e armazena no historicoFatoriaisState
   * @url http://localhost:8080/api/fatorial
   * @async 
   * 
   */
  const fetchHistoricoFatoriais = () => {
    axios.get("http://localhost:8080/api/fatorial", {
      validateStatus: () => true
    }).then((res) => {
      setHistoricoFatoriaisState({items: res.data});
    })
    .catch(function (error) {
      if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });
  };

  /**
   * Effects
   */
  useEffect(() => {
    fetchHistoricoFatoriais();
  }, []);

  // State para armazenamento do input
  const [inputFatorialState, setInputFatorialState] = useState([]);

  /**
   * 
   * @param event 
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/api/fatorial", {
        valor: inputFatorialState.valor,
        validateStatus: () => true
    })
    .then(res => {
      setHistoricoFatoriaisState(prevState => ({
        items: [res.data, ...prevState.items]
      }))
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.errors[0].defaultMessage);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error);
      }
    });
  };

  /**
   * 
   * @param e 
   */
  const handleInputChange = (event) => {
    let input = event.target;
    let name = event.target.name;
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
              <TableFatoriais props={historicoFatoriaisState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
