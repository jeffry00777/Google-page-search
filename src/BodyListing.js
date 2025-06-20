import React, { useEffect, useState } from "react";
import GoogleIcon from "./GoogleIcon";
import { list_items } from "./listings";
import { useLocation } from "react-router-dom";

export default function BodyListing({ question }) {
  const [loading, setLoading] = useState(true);
  const [aiResponse, setAiResponse] = useState("");

  useEffect(() => {
    if (!question) {
      setAiResponse(""); // clear if question is empty
      setLoading(false);
      return;
    }

    const fetchAIResponse = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://python-ai-wdey.onrender.com/ask",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question }),
          }
        );
        const data = await response.json();
        setAiResponse(data.response || "No response received.");
      } catch (error) {
        setAiResponse("Error retrieving information.");
      } finally {
        setLoading(false);
      }
    };

    fetchAIResponse();
  }, [question]);

  return (
    <div>
      <div className="pg-main-listing">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#0a6da6"
            viewBox="0 0 16 16"
          >
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828z" />
          </svg>
          <span> AI Overview</span>
        </div>

        {loading ? (
          <div className="card-listing">
            <div className="generating">generating . . . </div>
            <div className="loading-shimmer"></div>
            <div className="loading-shimmer"></div>
            <div className="loading-shimmer"></div>
          </div>
        ) : (
          <div className="card-listing">
            <div className="ai-response">{aiResponse}</div>
          </div>
        )}

        <hr className="line" />
      </div>

      <div>
        {list_items.map((item, index) => (
          <div className="pg-body-listing" key={index}>
            <div>
              <img src={item.img} alt={item.title} width="16" height="16" />
              <span className="pg-higlight-content">{item.title}</span>
            </div>
            <div className="pg-bg-li-div">
              <a href={item.URL} target="_blank" rel="noopener noreferrer">
                <h4>{item.title_heading}</h4>
              </a>
              <div className="pg-bg-li-div-inner">
                <p>{item.Description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-icon">
        <GoogleIcon width="30" height="30" cls="search-google-img" />
      </div>
    </div>
  );
}
