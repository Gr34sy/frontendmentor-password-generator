import { Checkmark } from "./Checkmark";

export function Settings() {
  return (
    <div className="settings bg-dark-grey">
      <header className="settings__header">
        <p className="settings__header_title">Character Length</p>
        <p className="settings__header_number">
          1
        </p>
      </header>

      <div className="settings__slider"></div>

      <ul className="settings__checkmarks">
        <li className="checkmark" data-name="uppercase">
          <Checkmark checked>Include Uppercase Letters</Checkmark>
        </li>

        <li className="checkmark" data-name="lowercase">
          <Checkmark>Include Lowercase Letters</Checkmark>
        </li>

        <li className="checkmark" data-name="numbers">
          <Checkmark>Include Numbers</Checkmark>
        </li>

        <li className="checkmark" data-name="symbols">
          <Checkmark>Include Symbols Strength</Checkmark>
        </li>
      </ul>

      <div className="settings__strength-indicator">
        <div>Strength</div>
        <div></div>
      </div>

      <button className="settings__generate-btn">Generate</button>
    </div>
  );
}
