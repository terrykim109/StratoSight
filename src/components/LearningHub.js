'use client';

import { useState } from 'react';

export default function LearningHub() {
  const [answered, setAnswered] = useState(false);

  const handleQuizSubmit = async () => {
    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quiz',
          data: { quizId: 'quiz-1', score: 100 }
        })
      });

      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'badge',
          data: { badge: 'First Quiz Completed' }
        })
      });

      setAnswered(true);
      alert('Correct! Badge earned: First Quiz Completed 🎉');
    } catch (error) {
      alert('Please log in to save your progress and earn badges!');
    }
  };

  return (
    <section id="learn" className="section">
      <h2>🌱 Learning Hub</h2>
      <p>Play quiz challenges & earn badges while exploring space biology!</p>
      <div className="quiz-card">
        <p><strong>Quiz:</strong> What is a major effect of microgravity on plant roots?</p>
        <ul>
          <li>🌿 A. Increased root density</li>
          <li>🌊 B. Altered root growth direction ✅</li>
          <li>🔥 C. Faster nutrient uptake</li>
        </ul>
        <button onClick={handleQuizSubmit} disabled={answered}>
          {answered ? 'Completed! ✓' : 'Submit Answer ➡️'}
        </button>
      </div>
    </section>
  );
}