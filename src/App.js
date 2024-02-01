import './App.css';
import Allrest from './Components/AllRest/Allrest';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Viewrest from './Components/ViewRest/Viewrest';


function App() {
  return (
   <div className='App'>
         <Header/>
    <Routes>
      <Route path='/' element={<Allrest/>}/>
     
      <Route path='/view/:id' element={<Viewrest/>}/>
    </Routes>

     <Footer/>
   </div>
  );
}

export default App;
