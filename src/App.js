import logo from './logo.svg';
import './App.css';
import Home from './view/home';
import Sidebar from './component/sidebar';
import Header from './component/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;
