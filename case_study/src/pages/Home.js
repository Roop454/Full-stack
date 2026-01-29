import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to <u>PARKASH ENGG. WORKS</u></h1>

      <p>
        PARKASH ENGG. WORKS is a well-established sanitary store dealing in
        pipes, taps, bathroom fittings, and plumbing accessories.
      </p>

      <p>
        We are committed to providing high-quality products with
        excellent customer service.
      </p>

       <>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Trusted Sanitary & Plumbing Solutions</h1>
        <p>Quality products. Reliable service. Since 1972.</p>
      </section>
    </>

    </div>
  );
}

export default Home;
