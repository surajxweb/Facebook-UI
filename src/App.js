import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main_section">
        <Main />
      </div>
    </div>
  );
}

export default App;
