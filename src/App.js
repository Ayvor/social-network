import "./App.css";
import { Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
// import Profile from "./component/Profile/Profile";
//import Dialogs from './component/Dialogs/Dialogs';
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            {/* <Navbar state={props.state.sideBar} /> */}
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <ProfileContainer />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
                <Route path="/users" render={() => <UsersContainer />} />
            </div>
        </div>
    );
};

export default App;
