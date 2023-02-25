/* eslint-disable no-unused-vars */
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from '../src/Feed/Feed'
import Widgets from './Widgets';
import Login from './Login'
import { useStateValue } from './StateProvier';
function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
