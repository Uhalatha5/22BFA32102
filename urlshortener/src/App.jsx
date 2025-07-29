import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UrlList from "./components/UrlList";
import ShortenerForm from "./components/shortenerForm";
import Redirector from "./components/Redirector";
import withLogger from "./middleware/withLogger";

function Home({ urls, setUrls }) {
  const addShortenedUrl = (newUrl) => {
    setUrls([...urls, newUrl]);
  };

  return (
    <>
      <h1>🌐 React URL Shortener</h1>
      <ShortenerForm onAdd={addShortenedUrl} />
      <UrlList urls={urls} />
    </>
  );
}

// ...existing code...

function App() {
  const [urls, setUrls] = useState([]);

  // Wrap Home with withLogger HOC
  const HomeWithLog = withLogger(Home);

  return (
    <Routes>
      <Route path="/" element={<HomeWithLog urls={urls} setUrls={setUrls} />} />
      <Route path="/:shortCode" element={<Redirector urls={urls} />} />
    </Routes>
  );
}

// ...existing code...

export default App;