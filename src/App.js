import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meditation from './routes/meditation';
import Journal from './routes/journal';
import Registration from './routes/registration';
import Resources from './routes/resources';
import Home from './routes/home';
import MoodTracker from './routes/moodTracker';
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
      <NavBar /> {}
      <div className="App">
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;