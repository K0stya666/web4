import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from "./components/pages/MainPage";
import StartPage from "./components/pages/StartPage";
import RegisterForm from "./components/forms/RegisterForm";

function App() {

  return (
      <Router>
          <Routes>

              <Route path="/" element={<StartPage/>} />
              <Route path="/start" element={<StartPage/>} />
              <Route path="/main" element={<MainPage/>} />
              <Route path="/register" element={<RegisterForm />} />

          </Routes>
      </Router>
    );
}

export default App;
