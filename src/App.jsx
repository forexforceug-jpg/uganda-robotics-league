import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Competitions from './pages/Competitions';
import Teams from './pages/Teams';
import Resources from './pages/Resources';
import News from './pages/News';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import './App.css';
import TeamProfile from './pages/TeamProfile';
import ProgramDetails from './pages/ProgramDetails';
import RegisterTeam from './pages/RegisterTeam';

function App() {
  return (
    <Router>
      <div className="App" style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team-profile" element={<TeamProfile />} />
          <Route path="/program-details" element={<ProgramDetails />} />
          <Route path="/register" element={<RegisterTeam />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;