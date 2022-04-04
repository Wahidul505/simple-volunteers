import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Volunteers from './Components/Volunteers/Volunteers';
import NotFound from './Components/NotFound/NotFound';
import { useEffect, useState } from 'react';

function App() {
  const [yAxis, setYAxis] = useState(0);
  const handleScroll = () => setYAxis(window.pageYOffset);
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  },[])
  console.log(yAxis);
  return (
    <div>
    <div className='App'>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/home' element={<Home />}></Route>
       <Route path='/volunteers' element={<Volunteers />}></Route>
       <Route path='*' element={<NotFound />}></Route>
     </Routes>
    </div>
    <div className='bg'>

    </div>
    </div>
  );
}

export default App;
