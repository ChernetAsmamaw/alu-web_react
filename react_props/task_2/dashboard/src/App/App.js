import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';


function App() {
  return (
    <>
      <Notifications/>
      <div className="App">
        <Header/>
        <hr className='hr-1'/>
        <Login/>
        <hr className='hr-2'/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
