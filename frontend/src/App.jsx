
import './App.css'
import Adduser from './components/Adduser'
import Alluser from './components/Alluser'
import Footer from './components/Footer'
import LogoHome from './components/LogoHome'
import Navbar from './components/Navbar'
import Readsingle from './components/Readsingle'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Updateuser from './components/Updateuser'
function App() {


  return (
    <>
    <BrowserRouter>
    {/* the navbar who dispaly at everytime take it outside the Routes section*/}
    <Navbar/>
    <Routes>
    {/* the components that changes at each route take it inside the Routes section*/}
    <Route path='/' element={<LogoHome/>}/>
    <Route path='/adduser' element={ <Adduser/>}/>
    <Route path='/alluser' element={<Alluser/>}/>
    <Route path='/readuser/:id' element={<Readsingle/>}/>
    <Route path='/update/:id' element={<Updateuser/>}/>
    </Routes>
    {/* the footer who dispaly at everytime take it outside the Routes section*/}
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
