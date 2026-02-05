function Portfolio() {
  return (
    <div className="portfolio">

      {/* Section 1 - Hero */}
      <div className="hero-section">
        <img src="/me.jpeg" className="avatar" alt="me" />
        <div>
          <h1 className="section-title">Hello, I'm a Rupinder Kaur</h1>
          <p>
            Passionate Full Stack Developer building futuristic
            web experiences with modern technologies.
          </p>
        </div>
      </div>

      {/* Section 2 - Professional Aspirations */}
      <div className="glass-section">
        <h2>Professional Aspirations</h2>
        <p>
          I am an aspiring Full Stack Developer with a strong passion for building
          modern, scalable, and user-centric web applications. My primary
          objective is to design systems that provide excellent user experiences
          while following strong engineering principles such as clean
          architecture, performance optimization, and maintainable code.
          <br /><br />
          I am particularly interested in working with modern frontend
          technologies like React and responsive UI frameworks, while also
          strengthening my backend knowledge in API development, database design,
          and server-side logic.
          <br /><br />
          My long-term goal is to become a skilled software engineer who can
          contribute to real-world projects, collaborate with experienced
          developers, and continuously learn new technologies.
        </p>
      </div>

      {/* Section 3 - Featured Projects */}
      <h2 className="section-title">Featured Projects</h2>

      <div className="project-grid center-grid">

        <div className="project-card2">
          <img src="/project1.png" alt="project2" />
          <h3><u>Card Based Layout using Bootstrap</u></h3>
          <p>
            The card-based layout created using Bootstrap provides a responsive
            and visually appealing user interface. This experiment helps in
            understanding how Bootstrap components can be effectively used to
            design structured and interactive web pages.
          </p>
        </div>

        <div className="project-card2">
          <img src="/project2.png" alt="project2" />
          <h3><u>Material UI Login System</u></h3>
          <p>
            Material UI Login system contains a simple login interface built
            using Material UI. It includes email and password fields, a login
            button, and social login options, demonstrating modern UI design
            in React.
          </p>
        </div>

        <div className="project-card2">
          <img src="/project3.png" alt="project3" />
          <h3><u>Business Application</u></h3>
          <p>
            Business application uses frontend development with HTML, CSS,
            JavaScript, and Bootstrap to create a responsive website.
          </p>
        </div>

        <div className="project-card2">
          <img src="/project4.jpeg" alt="project4" />
          <h3><u>Client Side React Router</u></h3>
          <p>
            Client-side routing is implemented using React Router to build a
            smooth and responsive Single Page Application.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
