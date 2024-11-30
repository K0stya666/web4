import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from "./components/MainPage";
import StartPage from "./components/StartPage";

function App() {

  return (
      <Router>
          <Routes>

              <Route path="/" element={<StartPage/>} />
              <Route path="/start" element={<StartPage/>} />
              <Route path="/main" element={<MainPage/>} />

          </Routes>
      </Router>
    );
}

export default App;
