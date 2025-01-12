"use client";
import React, { useState } from "react";

export default function ReadMore({ text }) {
  const [showFullText, setShowFullText] = useState(false);

  function handClick() {
    setShowFullText(true);
  }

  if (text.length <= 20 || showFullText) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>{text.slice(0, 20)}...</p>
      <button onClick={handClick} className="text-[#423e73] hover:text-black">
        Read More
      </button>
    </div>
  );
}
