import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meditation from './routes/meditation';
import Journal from './routes/journal';
import Registration from './routes/registration';
import Resources from './routes/resources';
import Home from './routes/home';
import MoodTracker from './routes/moodTracker';
import NavBar from './components/navBar';
import About from './routes/about';
import HamburgerMenu from './components/hamburgerMenu';
import NewPassword from './routes/passwordReset';

function App() {
  return (
    <Router>
      <NavBar />
      <HamburgerMenu />
      <div className="App" style={{ marginTop: '70px' }}>
        <header className="App-header">
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/moodTracker" element={<MoodTracker />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-password" element={<NewPassword />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
