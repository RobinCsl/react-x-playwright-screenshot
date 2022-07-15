import * as React from "react";

function App() {
  const location = new URL(window.location)
  const title = location.searchParams.get("title");
  const place = location.searchParams.get("place");

  return (
    <div className="screenshot-wrapper" style={{width: "fit-content"}}>
        <h1>{title}</h1>
        <h2>{place}</h2>
        <img src="https://source.unsplash.com/random/900%C3%97700/?beach" height={385} width={320} />
    </div>
  );
}

export default App;
