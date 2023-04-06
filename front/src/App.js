import { Routes, Route } from 'react-router-dom'
import Catalogue from './containers/Catalogue'
import AjoutBien from './containers/Ajout-bien-immobilier'
import Home from './containers/Home'
import GestionFinanciere from './containers/Gestion-Financiere'

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/Catalogue' element = {<Catalogue/>}/>
      <Route path = '/Ajout-bien-immobilier' element = {<AjoutBien/>}/>
      <Route path = '/Gestion-Financiere' element = {<GestionFinanciere/>}/>
    </Routes> 
    )
}

export default App
