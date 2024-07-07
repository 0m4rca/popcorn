import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./starRating";
import { useState } from "react";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrile", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} size="18" color="red" />
    <StarRating size="25" color="black" className={"test"} defaultRating={3} />
    <Test />
  </React.StrictMode>
);
