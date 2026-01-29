import React from "react";

function Home() {
  return (
    <div
      className="home-page"
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        color: "#000",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #FFC0CB, #87CEFA, #FFB6C1, #00BFFF)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 20s ease infinite",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating shapes */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "150px",
        height: "150px",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        animation: "float1 8s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "10%",
        width: "200px",
        height: "200px",
        background: "rgba(255,255,255,0.15)",
        borderRadius: "50%",
        animation: "float2 10s ease-in-out infinite"
      }}></div>

      {/* Content */}
      <h1 style={{
        fontSize: "3.5rem",
        fontWeight: "bold",
        textShadow: "3px 3px 15px rgba(0,0,0,0.3)"
      }}>
        Welcome to PARKASH ENGG. WORKS
      </h1>

      <p style={{
        fontSize: "1.5rem",
        margin: "25px 0",
        maxWidth: "800px",
        lineHeight: "1.8",
        textShadow: "1px 1px 8px rgba(0,0,0,0.2)"
      }}>
        PARKASH ENGG. WORKS is a well-established sanitary store dealing in pipes, taps, bathroom fittings, and plumbing accessories.
      </p>

      <p style={{
        fontSize: "1.3rem",
        margin: "15px 0",
        maxWidth: "800px",
        lineHeight: "1.8",
        fontStyle: "italic",
        textShadow: "1px 1px 8px rgba(0,0,0,0.15)"
      }}>
        We are committed to providing high-quality products with excellent customer service.
      </p>

      <h2 style={{
        fontSize: "2rem",
        fontWeight: "600",
        marginTop: "30px",
        textShadow: "2px 2px 10px rgba(0,0,0,0.2)"
      }}>
        Trusted Sanitary & Plumbing Solutions
      </h2>

      <p style={{
        fontSize: "1.2rem",
        marginTop: "10px",
        fontWeight: "500",
        maxWidth: "700px",
        textShadow: "1px 1px 6px rgba(0,0,0,0.2)"
      }}>
        Quality products. Reliable service. Since 1972.
      </p>

      {/* Call-to-action button */}
      <button style={{
        marginTop: "40px",
        padding: "12px 30px",
        fontSize: "1.2rem",
        fontWeight: "600",
        color: "#fff",
        background: "rgba(255, 105, 180, 0.8)",
        border: "none",
        borderRadius: "25px",
        cursor: "pointer",
        boxShadow: "2px 2px 15px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease"
      }}
      onMouseOver={e => e.currentTarget.style.background = "rgba(255, 105, 180, 1)"}
      onMouseOut={e => e.currentTarget.style.background = "rgba(255, 105, 180, 0.8)"}
      >
        Explore Our Products
      </button>

      {/* Keyframes */}
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }

          @keyframes float1 {
            0% {transform: translateY(0px);}
            50% {transform: translateY(-30px);}
            100% {transform: translateY(0px);}
          }

          @keyframes float2 {
            0% {transform: translateY(0px);}
            50% {transform: translateY(40px);}
            100% {transform: translateY(0px);}
          }
        `}
      </style>
    </div>
  );
}

export default Home;
