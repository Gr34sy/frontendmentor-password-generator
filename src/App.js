import { PasswordView } from "./components/PasswordView";
import { Settings } from "./components/Settings";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <main className="app__wrapper">
        <h1 className="app__title">Password Generator</h1>

        <PasswordView defaultText="P4$5W0rD!" />

        <Settings />
      </main>

      <footer className="app__footer bg-dark-grey">
        FrontendMentor Challenge Coded By{" "}
        <a href="https://heroic-quokka-3e69bf.netlify.app">Greasy</a>
      </footer>
    </div>
  );
}

export default App;
