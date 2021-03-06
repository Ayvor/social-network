import './App.css';

import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { initializeApp } from './Redux/app-reducer';

import HeaderContainer from './component/Header/HeaderContainer';
import Navbar from './component/Navbar/Navbar';
import News from './component/News/News';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import LoginPage from './component/Login/Login';
import { compose } from 'redux';
import Preloader from './component/Common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        {/* <Navbar state={props.state.sideBar} /> */}
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
