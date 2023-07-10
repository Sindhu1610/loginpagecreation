import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import LoginPage from './components/LoginPage'


function App() {
  return (
    <div className="App">
      <Header/>
      <LoginPage/>
    </div>
  );
}

export default App;