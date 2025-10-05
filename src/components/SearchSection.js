'use client';

export default function SearchSection() {
  const handleBookmark = async (paperId) => {
    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'bookmark',
          data: { paperId }
        })
      });
      alert('Paper bookmarked!');
    } catch (error) {
      alert('Please log in to bookmark papers');
    }
  };

  return (
    <section id="search" className="section">
      <h2>🔍 Smart Search & Summaries</h2>
      <p>Instantly find AI-generated summaries of NASA's space biology publications.</p>
      <div className="results">
        <div className="paper-card">
          <h3>🌱 Effects of Microgravity on Arabidopsis Growth</h3>
          <p><strong>Summary:</strong> AI analysis shows reduced root growth and altered gene expression in space-grown plants, impacting nutrient uptake and signaling pathways.</p>
          <div className="tags">
            <span className="tag easy">🟢 Easy</span>
            <span className="tag mission">ISS Mission</span>
            <span className="tag year">2021</span>
          </div>
          <button className="btn" style={{ marginTop: '1rem' }} onClick={() => handleBookmark('paper-1')}>
            ⭐ Bookmark
          </button>
        </div>

        <div className="paper-card">
          <h3>🧬 Human Muscle Atrophy During Spaceflight</h3>
          <p><strong>Summary:</strong> Astronaut muscle tissue shows 25% reduction in mass after 180 days in microgravity. Results inform exercise countermeasures for Mars missions.</p>
          <div className="tags">
            <span className="tag medium">🟡 Medium</span>
            <span className="tag mission">Shuttle Program</span>
            <span className="tag year">2018</span>
          </div>
          <button className="btn" style={{ marginTop: '1rem' }} onClick={() => handleBookmark('paper-2')}>
            ⭐ Bookmark
          </button>
        </div>
      </div>
    </section>
  );
}