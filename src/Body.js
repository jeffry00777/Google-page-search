import React, { useState } from "react";
import GoogleIcon from "./GoogleIcon";
import { useNavigate } from "react-router-dom";

export default function Body() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // navigate to /results with the query as a URL param
    navigate(`/results?question=${encodeURIComponent(query)}`);
  };

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

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Voice input:", transcript);
      setQuery(transcript);
    };

    recognition.start();
  };

  return (
    <div className="main-div-body">
      <div className="main-div-one">
        <GoogleIcon width="60" height="40" cls="google-img" />
      </div>
      <div className="search-bar-container">
        <button className="search-icon-button" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#888"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c28.4-35.3 45.7-80 45.7-128 0-141.4-114.6-256-256-256S-10 73.6-10 215s114.6 256 256 256c48 0 92.7-17.3 128-45.7L442.7 505c18.7 18.7 49 18.7 67.7 0 18.7-18.7 18.7-49 0-67.7zM215 384c-93.7 0-169-75.3-169-169S121.3 46 215 46s169 75.3 169 169-75.3 169-169 169z" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search Google"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button
          type="button"
          onClick={handleVoiceSearch}
          className="voice-button"
        >
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
      </div>
      <div className="search-btn">
        <button className="btn-search" onClick={handleSearch}>
          Google Search
        </button>
        <button className="btn-search">I'm Feeling Lucky</button>
      </div>
    </div>
  );
}
