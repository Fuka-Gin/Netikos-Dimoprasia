import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/login_page/LoginPage';
import SignupPage from './Components/signup_page/SignupPage';
import LandingPage from './Components/landing_page/LandingPage';
import AboutPage from './Components/about-page/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path= "/login" element={<LoginPage />} />
        <Route path= "/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
