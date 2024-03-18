
// Components
import { ArrowRightIcon } from "./ArrowRightIcon";
import { Checkmark } from "./Checkmark";

// Utility
import passwordGenerator from "../utils/passwordGenerator";

// Hooks
import { useState } from "react";
import { useEffect } from "react";

export function Settings({btnAction}) {
  const INITIAL_SETTINGS = {
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    length: 0,
  };
  const [settings, setSettings ] = useState(INITIAL_SETTINGS);

  useEffect(() => {
    console.log('Dupa');
  },[settings.length])

  function handleSettingsChange(name){
    setSettings((prevSettings) => {
      return ({
        ...prevSettings,
        [name]: !prevSettings[name],
      })
    })
  }

  function handleClick(e){
    e.preventDefault();

    if(typeof btnAction === 'function'){
      const password = passwordGenerator();
      btnAction(password);
    }
  }

  return (
    <div className="settings bg-dark-grey">
      <header className="settings__header">
        <p className="settings__header_title">Character Length</p>
        <p className="settings__header_number">{settings.length}</p>
      </header>

      <div className="settings__slider"></div>

      <ul className="settings__checkmarks">
        <li onClick={ () => handleSettingsChange('uppercase')}>
          <Checkmark checked={settings.uppercase}>Include Uppercase Letters</Checkmark>
        </li>

        <li  onClick={ () => handleSettingsChange('lowercase')}>
          <Checkmark checked={settings.lowercase}>Include Lowercase Letters</Checkmark>
        </li>

        <li onClick={ () => handleSettingsChange('numbers')}>
          <Checkmark checked={settings.numbers}>Include Numbers</Checkmark>
        </li>

        <li  onClick={ () => handleSettingsChange('symbols')}>
          <Checkmark checked={settings.symbols}>Include Symbols</Checkmark>
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

      <button className="settings__generate-btn" onClick={handleClick}>
        Generate

        <ArrowRightIcon />
      </button>
    </div>
  );
}
