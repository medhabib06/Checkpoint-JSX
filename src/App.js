import logo from "./logo.svg";
import "./style.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid,1cm,black", maxWidth: "100vw" }}>
        <h1 className="title red">Mohamed Habib</h1>
        <br />
        <img style={{ maxWidth: "40%" }} src={imageInSrc} alt="image" />
        <br />
        <br />
        <img src="/imageInPublic.jpg" />
      </div>
    </div>
  );
}

export default App;
