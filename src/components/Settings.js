
import { ArrowRightIcon } from "./ArrowRightIcon";
import { Checkmark } from "./Checkmark";

// Hooks
import { useState } from "react";

export function Settings() {
  const INITIAL_SETTINGS = {
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    length: 0,
  };
  const [settings, setSettings ] = useState(INITIAL_SETTINGS);

  function handleSettingsChange(name){
    setSettings((prevSettings) => {
      return ({
        ...prevSettings,
        [name]: !prevSettings[name],
      })
    })
  }

  return (
    <div className="settings bg-dark-grey">
      <header className="settings__header">
        <p className="settings__header_title">Character Length</p>
        <p className="settings__header_number">0</p>
      </header>

      <div className="settings__slider"></div>

      <ul className="settings__checkmarks">
        <li className="checkmark" onClick={ () => handleSettingsChange('uppercase')}>
          <Checkmark checked={settings.uppercase}>Include Uppercase Letters</Checkmark>
        </li>

        <li className="checkmark"  onClick={ () => handleSettingsChange('lowercase')}>
          <Checkmark checked={settings.lowercase}>Include Lowercase Letters</Checkmark>
        </li>

        <li className="checkmark" onClick={ () => handleSettingsChange('numbers')}>
          <Checkmark checked={settings.numbers}>Include Numbers</Checkmark>
        </li>

        <li className="checkmark"  onClick={ () => handleSettingsChange('symbols')}>
          <Checkmark checked={settings.symbols}>Include Symbols Strength</Checkmark>
        </li>
      </ul>

      <div className="settings__strength-indicator">
        <div>Strength</div>

        <div>
          LEVEL
          <span className="level-span" />

          <span className="level-span" />

          <span className="level-span" />

          <span className="level-span" />
        </div>
      </div>

      <button className="settings__generate-btn">
        Generate

        <ArrowRightIcon />
      </button>
    </div>
  );
}
