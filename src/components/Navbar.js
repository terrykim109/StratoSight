'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/progress');
      if (res.ok) {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      localStorage.removeItem('user');
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header>
      <div className="logo">🧬 BioVerse</div>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/#search">Search</a>
        <a href="/#graph">Explore</a>
        <a href="/#trends">Trends</a>
        <a href="/#learn">Learn</a>
        <a href="/#about">About</a>
        {user ? (
          <>
            <span className="user-info">👋 {user.name}</span>
            <a href="/dashboard">Dashboard</a>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </nav>
    </header>
  );
}