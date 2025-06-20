import React from "react";
import MatrixDotIcon from "./MatrixDotIcon";

export default function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul className="nav-ul">
          <li className="nav-list">
            <button className="nav-btn">About</button>
          </li>
          <li className="nav-list">
            <button className="nav-btn">Store</button>
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
          </div>
        </ul>
      </nav>
    </header>
  );
}
