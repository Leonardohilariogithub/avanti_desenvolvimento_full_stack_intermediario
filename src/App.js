/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import Titulo from './components/titulo.js';
import Card from './components/card.js';
import Botao from './components/botao.js';

import Titulocss from './components/css/titulo.css';
import Cardcss from './components/css/card.css';
import Botaocss from './components/css/botao.css';

function App() {
  return (
    <div className="App">
      <header className="titulo"> Meu Projeto React </header>
      <Titulo />
      <Card />
      <Botao /> 

      <br></br>
      <div>=====</div>

      <div className="card">
         <h2 className="card-title">Trabalho</h2>
         <p className="card-content">Este é o conteúdo do Trabalho.</p> 
         <button className="botao">Clique Aqui</button> 
      </div>   

      <div className="card">
         <h2 className="card-title">Trabalho</h2>
         <p className="card-content">Este é o conteúdo do Trabalho.</p> 
         <button className="botao">Clique Aqui</button> 
      </div>  

      <div className="card">
         <h2 className="card-title">Trabalho</h2>
         <p className="card-content">Este é o conteúdo do Trabalho.</p> 
         <button className="botao">Clique Aqui</button> 
      </div>  

      <br></br>
      <div>=====</div>

      
    </div>
    
  );
}

export default App;
