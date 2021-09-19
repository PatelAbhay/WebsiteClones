import Contacts from './components/Contacts';
import Feeds from './components/Feeds';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import './css/App.css';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feeds />
            <Contacts />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
