import checkmarkIcon from '../assets/images/icon-check.svg';

export function Checkmark({children, checked}){
    return (
        <div className="checkmark">
            <div className="checkmark__square">
                {checked && <img src={checkmarkIcon} alt="checkmark" />}
            </div>
            <p className="checkmark__label">
            {children}
            </p>
        </div>
    );
}