import React, { useState } from "react";

export function ReactIslandButton({}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      style={{ backgroundColor: isClicked ? "green" : "deeppink" }}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked ? "is clicked" : "is NOT clicked"}
      {` - ${isClicked}`}
    </button>
  );
}
