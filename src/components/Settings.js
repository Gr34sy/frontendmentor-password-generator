
// Components
import {ArrowRightIcon} from "./icons/ArrowRightIcon";
import { Checkmark } from "./Checkmark";

// Utility
import passwordGenerator from "../utils/passwordGenerator";
import getPasswordLevel from "../utils/getPasswordLevel";

// Hooks
import { useState, useEffect } from "react";

export function Settings({btnAction}) {
  const INITIAL_SETTINGS = {
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    length: 0,
  };
  const [settings, setSettings ] = useState(INITIAL_SETTINGS);
  const [passwordLevel, setPasswordLevel] = useState("");

  useEffect(() => {
    const sliderEl = document.querySelector(".settings__slider");
    const tempSliderValue = settings.length;
    const neonGreen = "#a4ffaf";
    const black = "#18171f";
      
    const progress = (tempSliderValue / sliderEl.max) * 100;
     
    sliderEl.style.background = `linear-gradient(to right, ${neonGreen} ${progress}%, ${black} ${progress}%)`;
    
    return () => {}
  },[settings.length])

  function handleSettingsChange(name){
    setSettings((prevSettings) => {
      return ({
        ...prevSettings,
        [name]: !prevSettings[name],
      })
    })
  }

  function handleLengthChange(e){
    setSettings((prevSettings) => {
      return ({
        ...prevSettings,
        length: e.target.value,
      })
    })
  }

  function handleClick(e){
    e.preventDefault();

    if(typeof btnAction === 'function'){
      const password = passwordGenerator(settings.uppercase, settings.lowercase, settings.numbers, settings.symbols, settings.length);

      if(password){
        btnAction(password);
        setPasswordLevel(getPasswordLevel(password));
      }
    }
  }

  return (
    <div className="settings bg-dark-grey">
      <header className="settings__header">
        <p className="settings__header_title">Character Length</p>
        <p className="settings__header_number">{settings.length}</p>
      </header>

      <input type="range" value={settings.length} onChange={handleLengthChange} className="settings__slider" min="0" max="20"/>

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

        <div className={"level-spans " + passwordLevel}>
          {passwordLevel.replace("-" , " ") || "LEVEL"}
          <span/>

          <span/>

          <span/>

          <span/>
        </div>
      </div>

      <button className="settings__generate-btn" onClick={handleClick}>
        Generate

        <ArrowRightIcon />
      </button>
    </div>
  );
}
