'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProgress();
    const userData = JSON.parse(localStorage.getItem('user') || 'null');
    setUser(userData);
  }, []);

  const fetchProgress = async () => {
    try {
      const res = await fetch('/api/progress');
      if (!res.ok) {
        router.push('/login');
        return;
      }
      const data = await res.json();
      setProgress(data.progress);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch progress:', error);
      router.push('/login');
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="dashboard-container">
          <h1 style={{ color: '#33ffcc', textAlign: 'center' }}>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1 style={{ color: '#33ffcc', textAlign: 'center', marginBottom: '2rem', textShadow: '0 0 10px #33ffcc' }}>
          {user?.name}'s Dashboard
        </h1>

        <div className="dashboard-section">
          <h2>📊 Your Stats</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{progress?.quizScores?.length || 0}</h3>
              <p>Quizzes Completed</p>
            </div>
            <div className="stat-card">
              <h3>{progress?.badges?.length || 0}</h3>
              <p>Badges Earned</p>
            </div>
            <div className="stat-card">
              <h3>{progress?.searchHistory?.length || 0}</h3>
              <p>Searches Made</p>
            </div>
            <div className="stat-card">
              <h3>{progress?.bookmarkedPapers?.length || 0}</h3>
              <p>Papers Bookmarked</p>
            </div>
          </div>
        </div>

        {progress?.badges && progress.badges.length > 0 && (
          <div className="dashboard-section">
            <h2>🏆 Your Badges</h2>
            <div className="badge-list">
              {progress.badges.map((badge, index) => (
                <div key={index} className="badge">
                  🎖️ {badge}
                </div>
              ))}
            </div>
          </div>
        )}

        {progress?.quizScores && progress.quizScores.length > 0 && (
          <div className="dashboard-section">
            <h2>📝 Quiz History</h2>
            <div className="history-list">
              {progress.quizScores.slice(-5).reverse().map((quiz, index) => (
                <div key={index} className="history-item">
                  <span>Quiz {quiz.quizId}</span>
                  <span>Score: {quiz.score}% - {new Date(quiz.completedAt).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {progress?.searchHistory && progress.searchHistory.length > 0 && (
          <div className="dashboard-section">
            <h2>🔍 Recent Searches</h2>
            <div className="history-list">
              {progress.searchHistory.slice(-10).reverse().map((search, index) => (
                <div key={index} className="history-item">
                  <span>{search.query}</span>
                  <span>{new Date(search.timestamp).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {progress?.bookmarkedPapers && progress.bookmarkedPapers.length > 0 && (
          <div className="dashboard-section">
            <h2>⭐ Bookmarked Papers</h2>
            <div className="history-list">
              {progress.bookmarkedPapers.map((paperId, index) => (
                <div key={index} className="history-item">
                  <span>Paper ID: {paperId}</span>
                  <span>📄</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}