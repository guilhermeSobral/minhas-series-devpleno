import React from 'react';
import Header from './Header.js'
import Generos from './Generos.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NovoGenero from './NovoGenero.js'
import AtualizaGenero from './AtualizaGenero.js'
import Axios from 'axios'

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/generos' exact component={Generos}></Route>
        <Route path='/novo-genero' exact component={NovoGenero}></Route>
        <Route path='/atualiza-genero/:id' exact component={AtualizaGenero}></Route>
      </div>
    </Router>

  );
}

export default App;
