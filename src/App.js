import { HashRouter,Routes,Route, NavLink } from 'react-router-dom';
import Electronics from './pages/Electronics';
import Homeappliances from './pages/Homeappliances';
import Trending from './pages/Trending';
import Home from './pages/Home';
import Outfit from './pages/Outfit';
import Books from './pages/Books';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import { useState } from 'react';
import { AppContext } from './AppContext';
import Menu from './components/menu/Menu';

function App() {
  const[menuflag,setMenuflag]=useState(false)
  const[posterbanner,setPosterbanner]=useState({})

  return (
    
    <div className='App'>
      <HashRouter>
        <AppContext.Provider value={{menuflag,setMenuflag,posterbanner,setPosterbanner}}>
      <Navbar/>
      <Search/>
      {menuflag && <Menu/>}
      {posterbanner && <NavLink to={posterbanner.path}/>}
       <Routes>
       <Route path='/' exact element={<Home/>}></Route>
        <Route path='/electronics' element={<Electronics/>}></Route>
        <Route path='/homeappliances' element={<Homeappliances/>}></Route>
        <Route path='/outfit' element={<Outfit/>}></Route>
        <Route path='/trending' element={<Trending/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
       </Routes>
       </AppContext.Provider>
    </HashRouter>
    </div>
    
  );
}

export default App;
