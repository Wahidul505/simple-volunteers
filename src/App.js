import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Volunteers from './Components/Volunteers/Volunteers';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/home' element={<Home />}></Route>
       <Route path='/volunteers' element={<Volunteers />}></Route>
       <Route path='*' element={<NotFound />}></Route>
     </Routes>
    </div>
  );
}

export default App;
