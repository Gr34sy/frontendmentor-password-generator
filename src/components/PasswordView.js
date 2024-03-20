// icons
import {CopyIcon} from "./icons/CopyIcon";

//hooks
import { useState } from "react";

export function PasswordView({password}) {
  const [isCopied, setIsCopied ] = useState(false);

  function handleCopy(){
    if(!isCopied){
      setIsCopied(true);
    }
  }
  return (
    <div className={password ? "password-view bg-dark-grey" : "password-view bg-dark-grey password-view--empty"}>
      <p>{password || "P4$5W0rD!"}</p>

      <span>
        {isCopied && "copied"}
      </span>

      <div onClick={handleCopy}>
      <CopyIcon/>
      </div>
    </div>);
}
