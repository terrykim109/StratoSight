import Image from 'next/image';

export default function Trends() {
  return (
    <section id="trends" className="section">
      <h2>📈 Trends & Insights</h2>
      <p>Discover research focus areas and gaps over time.</p>
      <div className="charts">
        <div className="chart">
          <h4>Top Researched Organisms</h4>
          <img 
            src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Human','Plant','Microbe'],datasets:[{data:[340,210,80]}]}}" 
            alt="Top Researched Organisms"
          />
        </div>
        <div className="chart">
          <h4>Publications Over Time</h4>
          <img 
            src="https://quickchart.io/chart?c={type:'line',data:{labels:['2000','2005','2010','2015','2020'],datasets:[{data:[50,120,230,400,608]}]}}" 
            alt="Publications Over Time"
          />
        </div>
      </div>
    </section>
  );
}