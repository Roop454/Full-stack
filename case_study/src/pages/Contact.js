import React from "react";

function Contact() {
  return (
    <div
      className="contact-page"
      style={{
        minHeight: "80vh",
        padding: "50px 0",
        background: "linear-gradient(135deg, #FFC0CB 0%, #87CEFA 100%)",
      }}
    >
      <div className="container">
        {/* Business Info */}
        <div
          className="text-center mb-5 p-4"
          style={{
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <h3 style={{ fontWeight: "700" }}>Parkash Engineering Works</h3>
          <p style={{ margin: "5px 0", fontSize: "16px" }}>
            GSTIN: 03ABVPS7095P1ZG
          </p>
          <p style={{ margin: "5px 0", fontSize: "16px" }}>
            Mobile: 9815540454, 9872438454
          </p>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{
                    width: "100%",
                    background: "linear-gradient(90deg, #FF69B4, #1E90FF)",
                    border: "none",
                    padding: "10px",
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#fff",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Optional footer / address */}
        <div className="row mt-5 text-center">
          <div className="col">
            <p style={{ color: "#fff", fontSize: "16px" }}>
              🏢 Bassi Road, Sirhind, Punjab, Pincode-140406
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
