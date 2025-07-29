import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Redirector({ urls }) {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const match = urls.find((u) => u.short === shortCode);
    if (match) {
      window.location.href = match.original;
    } else {
      alert("Link not found or expired");
      navigate("/");
    }
  }, [shortCode, urls, navigate]);

  return null;
}

export default Redirector;