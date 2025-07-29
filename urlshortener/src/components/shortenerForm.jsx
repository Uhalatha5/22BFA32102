import React, { useState } from "react";

function ShortenerForm({ onAdd }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortCode, setShortCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!originalUrl.trim()) {
      alert("Please enter a valid URL.");
      return;
    }

    const generated = shortCode || Math.random().toString(36).substring(2, 7);

    onAdd({
      original: originalUrl,
      short: generated,
    });

    setOriginalUrl("");
    setShortCode("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter original URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Custom short code (optional)"
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default ShortenerForm;