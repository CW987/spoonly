"use client";

import { useState } from "react";
import "./footer.css";

export default function Footer(props) {
  const [showContent, setShowContent] = useState(false);
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowContent(!showContent);
  }
  return (
    <>
    <div id="Footer">
      <h4 onClick={handleClick}>
        {props.title} Spoonly 🥄 Copyright Natasha, Curtis, Hannah and Cameron
        2025
      </h4>
      {showContent && <p>{props.content}</p>}
      </div>
    </>
  );
}
