import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <main className="app__wrapper">
        <h1 className="app__title">Password Generator</h1>

        <div className="password-view bg-dark-grey">P4$5W0rD!</div>

        <div className="settings bg-dark-grey">
          <p>Character Length</p>
          <ul>
            <li className="checkmark" data-name="uppercase">
              Include Uppercase Letters
            </li>

            <li className="checkmark" data-name="lowercase">
              Include Lowercase Letters
            </li>

            <li className="checkmark" data-name="numbers">
              Include Numbers
            </li>

            <li className="checkmark" data-name="symbols">
              Include Symbols Strength
            </li>
          </ul>

          <div className="settings__strength-indicator">
            <div>Strength</div>
            <div></div>
          </div>

          <button className="settings__generate-btn">Generate</button>
        </div>
      </main>

      <footer className="app__footer bg-dark-grey">
        FrontendMentor Challenge Coded By{" "}
        <a href="https://heroic-quokka-3e69bf.netlify.app">Greasy</a>
      </footer>
    </div>
  );
}

export default App;
