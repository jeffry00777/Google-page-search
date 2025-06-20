import React, { useState } from "react";
import MatrixDotIcon from "./MatrixDotIcon";
import GoogleIcon from "./GoogleIcon";
import BodyListing from "./BodyListing";
import FooterListing from "./FooterListing";
import { useLocation } from "react-router-dom";

export default function HeaderListing() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const questionFromURL = searchParams.get("question") || "";
  const [query, setQuery] = useState(questionFromURL);
  const [finalQuery, setFinalQuery] = useState(questionFromURL);

  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setQuery("Listening...");

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setFinalQuery(transcript);
    };

    recognition.onerror = () => setQuery("");
    recognition.start();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setFinalQuery(query);
    }
  };

  const handleSearchClick = () => {
    setFinalQuery(query);
  };

  const handleClear = () => {
    setQuery("");
    setFinalQuery("");
  };

  return (
    <div>
      <header className="search-header">
        <div className="search-left">
          <div className="search-pg-div">
            <GoogleIcon width="30" height="30" cls="search-google-img" />
          </div>
          <div className="search-pg-bar-container">
            <input
              type="text"
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
            />
            <button className="close-btn" onClick={handleClear}>
              X
            </button>
            <span className="span-btn">|</span>
            <button
              type="button"
              onClick={handleVoiceSearch}
              className="voice-button-search"
            >
              {/* Old voice SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M12 14a2 2 0 0 0 2-2V6a2 2 0 0 0-4 0v6a2 2 0 0 0 2 2z"
                />
                <path
                  fill="#34A853"
                  d="M19 11v1a7 7 0 0 1-14 0v-1H3v1a9 9 0 0 0 18 0v-1z"
                />
                <path
                  fill="#FBBC05"
                  d="M12 17c-2.76 0-5-2.24-5-5v-1h2v1a3 3 0 0 0 6 0v-1h2v1c0 2.76-2.24 5-5 5z"
                />
                <path fill="#EA4335" d="M13 10h-2V6h2v4z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleSearchClick}
              className="search-button"
            >
              🔍
            </button>
          </div>
        </div>

        <nav>
          <ul className="search-nav-ul">
            <li>
              <button className="nav-btn">Gmail</button>
            </li>
            <li>
              <button className="nav-btn">Images</button>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="30"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#787878"
                  d="M288 0L160 0 128 0C110.3 0 96 14.3..."
                />
              </svg>
            </li>
            <li>
              <MatrixDotIcon />
            </li>
            <li>
              <button className="signin-btn">Sign In</button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="search-sub-div">
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Images</button>
          </li>
          <li>
            <button>News</button>
          </li>
          <li>
            <button>Short Video</button>
          </li>
          <li>
            <button>Video</button>
          </li>
          <li>
            <button>Shopping</button>
          </li>
          <li>
            <button>Forms</button>
          </li>
          <li>
            <button>More</button>
          </li>
        </ul>
      </div>

      <hr />
      <BodyListing question={finalQuery} />
      <FooterListing />
    </div>
  );
}
