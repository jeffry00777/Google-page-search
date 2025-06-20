import React from "react";

export default function FooterListing() {
  return (
    <div className="footer-location-container">
      <p>
        Results are personalized -{" "}
        <a href="#" className="footer-link">
          Try without personalization
        </a>
      </p>
      <div className="footer-location">
        <span className="location-dot"></span>
        <strong>Cambridge, Massachusetts</strong> -{" "}
        <span className="footer-link">From your IP address</span> -{" "}
        <a href="#" className="footer-link">
          Update location
        </a>
      </div>
      <div className="footer-links">
        <a href="#">Help</a>
        <a href="#">Send feedback</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  );
}
