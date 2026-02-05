function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="section-title">Technical Dashboard</h1>

      <div className="dash-grid">
        <div className="dash-card">
          <h3>Frontend Stack</h3>
          <p>React, HTML5, Responsive UI, Component-Based Design, Bootstrap, MUI</p>
        </div>

        <div className="dash-card">
          <h3>Backend & APIs</h3>
          <p>Node.js, Express.js, RESTful APIs, Authentication Systems</p>
        </div>

        <div className="dash-card">
          <h3>Engineering</h3>
          <p>OS, Networks, Software Design</p>
        </div>

        <div className="dash-card">
          <h3>Architecture</h3>
          <p>SPA, Routing, Component Design</p>
        </div>

        <div className="dash-card">
          <h3>Databases & Cloud</h3>
          <p>MongoDB, MySQL, Oracle, Azure AI Fundamentals</p>
        </div>

        <div className="dash-card">
          <h3>Data & Machine Learning</h3>
          <p>Python, Data Science, Machine Learning, Power BI</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
