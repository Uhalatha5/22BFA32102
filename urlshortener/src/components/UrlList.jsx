import React from "react";

function UrlList({ urls }) {
  return (
    <div>
      <h2>🔗 Shortened URLs</h2>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            <strong>Short:</strong>{" "}
            <a
              href={`http://localhost:5173/${url.short}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`http://localhost:5173/${url.short}`}
            </a>
            <br />
            <strong>Original:</strong> {url.original}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UrlList;