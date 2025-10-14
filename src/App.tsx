import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeSplash from './components/WelcomeSplash';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Initialisation persistante du thème
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    } catch (err) {
      // éviter no-empty
      console.debug('theme read failed', err);
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Applique la classe 'dark' et persiste le choix
  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (err) {
      // éviter no-empty
      console.debug('theme write failed', err);
    }
  }, [isDark]);

  if (showSplash) {
    return <WelcomeSplash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={<HomePage isDark={isDark} setIsDark={setIsDark} />}
        />
        <Route
          path="/project/:id"
          element={<ProjectDetailPage isDark={isDark} setIsDark={setIsDark} />}
        />
      </Routes>
    </Router>
  );
}

export default App;