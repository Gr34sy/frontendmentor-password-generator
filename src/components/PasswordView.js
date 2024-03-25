// icons
import {CopyIcon} from "./icons/CopyIcon";

//hooks
import { useState, useEffect } from "react";

export function PasswordView({password}) {
  const [isCopied, setIsCopied ] = useState(false);

  useEffect(() => {
    if(isCopied){
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 5000)

      return () => clearTimeout(timeout);
    }

  }, [isCopied])

  function handleCopy(){
    if(!isCopied){
      setIsCopied(true);
    }
    navigator.clipboard.writeText(password || "P4$5W0rD!");
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
