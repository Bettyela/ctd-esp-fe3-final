import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home/Home'
import Contact from './Routes/Contact'
import { routes } from './utils/routes'
import Detail from './Components/Detail/Detail'
import Layout from './Layout/Layout'
import Favs from './Routes/Favs'
import Form from './Components/Form/Form'


function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/> 
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.form} element={<Form/>}/>
          </Route>
        </Routes>
      </div>
   
  );
}

export default App;