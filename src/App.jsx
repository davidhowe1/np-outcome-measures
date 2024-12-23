import './App.css'
import Pass from './pages/Pass'
import Home from './pages/Home'
import Berg from './pages/Berg'
import Dgi from './pages/Dgi'
import Panda from './pages/Panda'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={ <Home /> }/>
        <Route path='/pass' element={ <Pass /> }/>
        <Route path='/berg' element={ <Berg /> }/>
        <Route path='/dgi' element={ <Dgi /> }/>
        <Route path='/panda' element={ <Panda /> }/>
      </Routes>
    </>
  )
}

export default App
