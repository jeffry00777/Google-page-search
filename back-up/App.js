import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  function Header() {
    return (
      <div>
        <header className="App-header">
          <nav>
            <div>
              <ul className="nav-ul">
                <li className="nav-list">
                  <button className="nav-btn">About</button>
                </li>
                <li className="nav-list">
                  <button className="nav-btn" onClick="">
                    Store
                  </button>
                </li>
                <div className="nav-list-right">
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
                        d="M288 0L160 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 0zM192 196.8L192 64l64 0 0 132.8c0 23.7 6.6 46.9 19 67.1L309.5 320l-171 0L173 263.9c12.4-20.2 19-43.4 19-67.1z"
                      />
                    </svg>
                  </li>
                  <li>
                    <MatrixDotIcon />
                  </li>
                  <li>
                    <button className="signin-btn">Sign In</button>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }

  function MatrixDotIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <circle cx="96" cy="96" r="48" fill="#6c6c6c" />
        <circle cx="256" cy="96" r="48" fill="#6c6c6c" />
        <circle cx="416" cy="96" r="48" fill="#6c6c6c" />
        <circle cx="96" cy="256" r="48" fill="#6c6c6c" />
        <circle cx="256" cy="256" r="48" fill="#6c6c6c" />
        <circle cx="416" cy="256" r="48" fill="#6c6c6c" />
        <circle cx="96" cy="416" r="48" fill="#6c6c6c" />
        <circle cx="256" cy="416" r="48" fill="#6c6c6c" />
        <circle cx="416" cy="416" r="48" fill="#6c6c6c" />
      </svg>
    );
  }
  function GoogleIcon(props) {
    return (
      <div>
        <img className={props.cls} src="/google.png" alt="Google Logo" />
        <span className="me-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 60 40"
          >
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="30"
              fill="#4285F4"
            >
              M
            </text>
            <text
              x="22"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="30"
              fill="#EA4335"
            >
              e
            </text>
          </svg>
        </span>
      </div>
    );
  }

  function Body() {
    const [query, setQuery] = useState("");
    const handleVoiceSearch = () => {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        alert("Speech Recognition not supported in this browser.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = "en-US"; // You can adjust language code here
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        console.log("Voice recognition activated. Please speak.");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Voice input:", transcript);

        // Set the search query in your state (replace with your state setter)
        setQuery(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.onend = () => {
        console.log("Voice recognition ended.");
      };

      recognition.start();
    };

    return (
      <div>
        <div className="main-div-body">
          <div className="main-div-one">
            <GoogleIcon width="60" height="40" cls="google-img" />
          </div>
          <div className="search-bar-container">
            <button className="search-icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#888"
                viewBox="0 0 512 512"
              >
                <path d="M505 442.7L405.3 343c28.4-35.3 45.7-80 45.7-128C451 96.5 354.5 0 231 0S11 96.5 11 215s96.5 215 215 215c48 0 92.7-17.3 128-45.7L442.7 505c18.7 18.7 49 18.7 67.7 0 18.7-18.7 18.7-49 0-67.7zM231 384c-93.7 0-169-75.3-169-169S137.3 46 231 46s169 75.3 169 169-75.3 169-169 169z" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search Google"
              className="search-input"
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
            <button className="btn-search">Google Search</button>
            <button className="btn-search">I'm Feeling Lucky</button>
          </div>
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <div className="card">
        <p>Applying AI towards science and environment</p>
        <ul className="ft-first-ul">
          <li className="ft-first-li">Advertising</li>
          <li className="ft-first-li">Business</li>
          <li className="ft-first-li">How Search works</li>
        </ul>
        <ul className="ft-second-ul">
          <li>Privacy</li>
          <li>Term</li>
          <li>Setting</li>
          <li></li>
        </ul>
      </div>
    );
  }

  function HeaderListing() {
    const [query, setQuery] = useState("Linked in of Jeffry");
    const handleVoiceSearch = () => {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        alert("Speech Recognition not supported in this browser.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = "en-US"; // You can adjust language code here
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        console.log("Voice recognition activated. Please speak.");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Voice input:", transcript);

        // Set the search query in your state (replace with your state setter)
        setQuery(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.onend = () => {
        console.log("Voice recognition ended.");
      };

      recognition.start();
    };
    return (
      <div>
        <header className="search-header">
          <div className="search-left">
            <div className="search-pg-div">
              <GoogleIcon width="30" height="30" cls="search-google-img" />
            </div>
            <div className="search-pg-bar-container">
              <input type="text" className="search-input" value={query} />
              <button className="close-btn">X</button>
              <span className="span-btn">|</span>
              <button
                type="button"
                onClick={handleVoiceSearch}
                className="voice-button-search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#020F0FA9"
                    d="M12 14a2 2 0 0 0 2-2V6a2 2 0 0 0-4 0v6a2 2 0 0 0 2 2z"
                  />
                  <path
                    fill="#020F0FA9"
                    d="M19 11v1a7 7 0 0 1-14 0v-1H3v1a9 9 0 0 0 18 0v-1z"
                  />
                  <path
                    fill="#020F0FA9"
                    d="M12 17c-2.76 0-5-2.24-5-5v-1h2v1a3 3 0 0 0 6 0v-1h2v1c0 2.76-2.24 5-5 5z"
                  />
                  <path fill="#020F0FA9" d="M13 10h-2V6h2v4z" />
                </svg>
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
                    d="M288 0L160 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 0zM192 196.8L192 64l64 0 0 132.8c0 23.7 6.6 46.9 19 67.1L309.5 320l-171 0L173 263.9c12.4-20.2 19-43.4 19-67.1z"
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
        <BodyListing />
        <FooterListing />
      </div>
    );
  }

  function FooterListing() {
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

  function BodyListing() {
    const [content, setContent] = useState(
      "A boutique hotel is a small, stylish, and unique hotel, typically with fewer than 100 rooms, that offers personalized service and a distinct character or design. They often have a smaller, more intimate atmosphere and may be located in trendy urban areas Click on the image to pick a color..Use the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value. Under 'Use Your Image' You can upload your own image (for example an screenshot of your desktop), paste an image from clipboard, put a picture url in the textbox below. Or use an website url, you will see a thumbnail on the left side"
    );
    return (
      <div>
        <div className="pg-main-listing">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#0a6da6"
              class="bi bi-stars"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
            <span> AI Overview</span>
          </div>
          <div className="card-listing">
            <div className="generating">generating . . . </div>
            <div class="loading-shimmer"></div>
            <div class="loading-shimmer"></div>
            <div class="loading-shimmer"></div>
          </div>
          <hr className="line" />
        </div>
        <div>
          {list_items.map((item, index) => (
            <div className="pg-body-listing" key={index}>
              <div>
                <img
                  src={item.img}
                  alt="Jeffry Livingston LinkedIn profile"
                  width="16"
                  height="16"
                />
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

  const list_items = [
    {
      title: "LinkedIn · Jeffry Livingston 270+ followers",
      URL: "https://www.linkedin.com/in/jeffry-livingston/",
      img: "/download.png",
      title_heading: "Jeffry Livingston - Hult International Business School",
      Description:
        "Jeffry Livingston. Master's in Business Analytics at Hult International Business School.\nSeeking summer '25 intern/co-op and full-time roles.",
    },
    {
      title: "Portfolio · Jeffry Livingston",
      URL: "https://jeffry-portfolio-c2a37.web.app/",
      img: "/portfolio-icon.png",
      title_heading: "Jeffry Livingston - Portfolio",
      Description:
        "Jeffry Livingston. Showcasing projects, design systems, and case studies that reflect my commitment to impactful engineering and clean design. This portfolio offers a great opportunity to understand my approach, learn more about me, and see how I combine Angular on the front end and Python on the back end to create powerful applications.",
    },
    {
      title: "GitHub · Jeffry Livingston",
      URL: "https://github.com/jeffry00777",
      img: "/github.png",
      title_heading: "My GitHub Projects",
      Description:
        "Jeffry Livingston. Passionate about exploring open source and building robust, full-stack applications that solve real-world problems. I love sharing data-driven insights and innovative solutions to inspire and empower fellow developers. My portfolio includes projects with Angular, React, Python, Java, and Node.js, showcasing a versatile and collaborative approach to modern software development.",
    },
    {
      title: "Instagram · Jeffry Livingston",
      URL: "https://www.instagram.com/jeffry_00",
      img: "/insta-icon.png",
      title_heading: "Let’s connect on Instagram",
      Description:
        "Jeffry Livingston. Sharing moments of creativity and travel.\nBlending art, design, and personal stories.Let’s connect on Instagram to learn more about me and explore my creative journey together. I love sharing glimpses of my daily adventures, personal insights, and a behind-the-scenes look at what inspires me. Let’s be friends and see what we can create and discover together!",
    },
    {
      title: "YouTube · Jeffry Livingston",
      URL: "https://www.youtube.com/@jeffstiffler697",
      img: "/youtube-icon.png",
      title_heading: "Jeffry Livingston",
      Description:
        "Jeffry Livingston. Join me on YouTube as I explore emerging technologies, share project walkthroughs, and deliver insightful tutorials. From full-stack development with Angular, React, Python, Java, and Node.js to practical applications that solve real-world challenges. I’m here to help you build, grow, and level up your skills. Let’s innovate together!",
    },
  ];

  return (
    <div className="App">
      <HeaderListing />
    </div>
  );
}
export default App;
