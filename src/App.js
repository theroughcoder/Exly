import logo from './logo.svg';
import './App.css';
import Home from './view/home';
import Sidebar from './component/sidebar';
import Header from './component/header';
import { useState } from 'react';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="App">
      <Header setOpenSidebar={setOpenSidebar}/>
      <Home />
      <Sidebar openSidebar={openSidebar}/>
    </div>
  );
}

export default App;
