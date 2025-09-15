import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Quote from './pages/Quote';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = ['/img.jpg', '/logo.png'];
    let loadedCount = 0;

    const imagePromises = preloadImages.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = img.onerror = () => {
          loadedCount++;
          if (loadedCount === preloadImages.length) {
            setTimeout(() => setLoading(false), 500);
          }
          resolve(null);
        };
        img.src = src;
      });
    });

    Promise.all(imagePromises);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-amber-50 text-stone-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;