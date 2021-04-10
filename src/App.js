import './App.css';
import { Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';
import News from './component/News/News';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sideBar} />
      <div className='app-wrapper-content'>
        <Route path="/profile"
          render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />

        <Route path="/dialogs"
          render={() => <Dialogs
            dialogsPage={props.state.dialogsPage}
            // message={props.state.dialogsPage.messages}
            // newMessageText={props.state.dialogsPage.newMessageText}
            dispatch={props.dispatch}
          />} />

        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
