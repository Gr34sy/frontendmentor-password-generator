// styles
import "./styles/App.css";

// components
import { PasswordView } from "./components/PasswordView";
import { Settings } from "./components/Settings";

// hooks
import { useState } from "react";

function App() {
  const [password, setPassword] = useState(null);

  return (
    <div className="App">
      <main className="app__wrapper">
        <h1 className="app__title">Password Generator</h1>

        <PasswordView password={password} />

        <Settings btnAction={setPassword}/>
      </main>

      <footer className="app__footer bg-dark-grey">
        FrontendMentor Challenge Coded By{" "}
        <a href="https://heroic-quokka-3e69bf.netlify.app">Greasy.</a>
      </footer>
    </div>
  );
}

export default App;
