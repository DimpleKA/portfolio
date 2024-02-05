import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Registration from './Components/Registration';
import Topnav from './Components/Topnav';
import Bottomnav from './Components/Bottomnav';

function App() {
  return (
    <Router>
      <div className="App">
        <Topnav />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Bottomnav />
      </div>
    </Router>
  );
}


export default App;
