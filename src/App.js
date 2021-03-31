import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Profile from './component/Profile';


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          IT-kamasutra Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />

      <Navbar />

      <Profile />
    </div>
  );
}






export default App;
