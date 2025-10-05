'use client';

import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    // Save search to progress if logged in
    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'search',
          data: { query: searchQuery }
        })
      });
    } catch (error) {
      console.log('Not logged in or search save failed');
    }
    
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Explore NASA's Space Biology<br /><span>Made Simple</span></h1>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Ask about microgravity on plants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>

        <div className="quick-links">
          <a href="#search" className="card">
            <span style={{ fontSize: '2rem' }}>🔍</span>
            <span>Search Papers</span>
          </a>
          <a href="#trends" className="card">
            <span style={{ fontSize: '2rem' }}>📈</span>
            <span>Explore Trends</span>
          </a>
          <a href="#learn" className="card">
            <span style={{ fontSize: '2rem' }}>🎓</span>
            <span>Learn & Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}