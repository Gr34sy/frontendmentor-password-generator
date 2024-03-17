export function Settings(){
    return (
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
    );
}