export default function KnowledgeGraph() {
  return (
    <section id="graph" className="section">
      <h2>🕸 Knowledge Graph Explorer</h2>
      <p>Visualize links between organisms, experiments, and missions.</p>
      <div className="graph-area">
        <div className="node">
          🌱 Arabidopsis
          <div className="sub">Linked: Gene Exp. Study, ISS, Gravity Response</div>
        </div>
        <div className="node">
          👩‍🚀 Human Muscle
          <div className="sub">Linked: Shuttle Mission, Health Effects</div>
        </div>
        <div className="node">
          🛰️ ISS Mission
          <div className="sub">Linked: 180+ Experiments</div>
        </div>
      </div>
    </section>
  );
}