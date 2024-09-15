import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';


function App({isLoggedIn}) {
  return (
    <>
      <Notifications/>
      <div className="App">
        <Header/>
        <hr className='hr-1'/>
        {isLoggedIn ? <CourseList/> : <Login/>}
        <hr className='hr-2'/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};
