import "./App.css";
import Forma from "./components/forma/Forma";

function App() {
  return (
    <div className="all">
      <div className="title">Should i eat McDonalds?</div>
      <div className="cols">
        <div className="pros">PROS</div>
        <div className="pros">CONS</div>
      </div>
      <div className="form">
        <Forma />
        <Forma />
      </div>
    </div>
  );
}

export default App;
