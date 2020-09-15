# Calculadora de Fatoriais

Aplicação web para cálculo de fatoriais com backend em Java e frontend em React.

Projeto criado para o desafio do processo seletivo de 2020.2 do [Laboratório Bridge](https://bridge.ufsc.br/).

## Tecnologias e principais Bibliotecas
* [Springboot](https://spring.io/) e dependências (maven, tomcat, mockito, JUnit e etc) - Para a API de backend;
* [React](https://reactjs.org/) - Biblioteca Javascript para construção do frontend;
  * [Axios](https://github.com/axios/axios) - Envio de requests HTTP assíncronos
  * [Bootstrap](https://getbootstrap.com/) - Framework CSS para responsividade do frontend;

## Instalação
Para executar o projeto é necessário:
* [React](https://reactjs.org/)
  * [npm](https://www.npmjs.com/)
* [Springboot](https://spring.io/)
  * [JDK 1.8](https://www.oracle.com/java/technologies/javase-downloads.html) ou acima
  * [Maven 3.2+](https://maven.apache.org/download.cgi)
  * Como alternativa: A maioria das IDEs possuem extensões para compilarem o springboot.

Para inicializar o React, é necessário navegar para [src/main/frontend](test_dir) e executar o comando:

```bash
npm start
```
Com isso já é possível acessar o front pelo localhost: [http:/localhost:3000](http:/localhost:3000)


Por último, é necessário executar o comando dentro do root do diretório:
```bash
./mvnw spring-boot:run
```
Com isso será possível consumir a API pela porta 8080 do localhost: [http:/localhost:8080](http:/localhost:3000)

## Utilização
* É recomendado o uso da [página web](http://localhost:3000), que contém um formulário, bem como tabela de histórico de cálculos realizados.
* Para consultar o histórico dos fatoriais envie um GET request para: [http://localhost:8080/api/fatorial](http://localhost:8080/api/fatorial)

* Para obter o resultado de um fatorial envie um POST request para: [http://localhost:8080/api/fatorial](http://localhost:8080/api/fatorial); 
Com o parâmetro "valor" em json, como o exemplo:
```javascript
{ "valor": 5 }
```

## Limitações
* Não é possível calcular fatoriais de números negativos;
* Não é possível calcular fatoriais de números não inteiros;
* Por uma escolha arbitrária, o maior n possível de ser calculado é 807, pois o resultado é armazenado num array de ints que pode manter até 2000 dígitos (é possível aumentar a alocação da memória).

  Tanto o backend quanto o frontend realizam as devidas validações para  impedir cálculos de números que não seguem as limitações.

## Contato
Giovanni Bertotti Sonaglio - giovannibsonaglio@gmail.com