import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header"></div>
        <main>
          <Dictionary />
        </main>
        <footer>
          This app was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ekaterina-romanenkova-9689b4211/"
            target="_blank"
            rel="noreferrer"
          >
            Rina R
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/Rina707S/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
      <header className="App-header"></header>
    </div>
  );
}
