import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      {/* <Dialogs /> */}
      <div className='app-wrapper-content'>
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
