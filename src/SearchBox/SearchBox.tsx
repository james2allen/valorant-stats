/** Imports */
import React, { useState, useEffect } from "react";
import "./SearchBox.scss";
import { isValidId } from "./Validation";

enum errorMessages {
  NOT_FOUND = "Could not find user, please try a different name and tag combination.",
  BAD_GATEWAY = "",
  INVALID_CHARACTERS = "You have entered an invalid character in the searchbox",
  INVALID_FORMAT = `The format of the id you have entered is invalid, please follow the format: Name#123`,
}

export const SearchBox = () => {
  const [riotId, setRiotId] = useState("");
  useEffect(() => {
    const [name, tag] = riotId.split("#");

    console.log(name);
    console.log(tag);
  });

  const [errorMsg, setErrorMsg] = useState("");

  const setNameAndTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRiotId(event?.target?.value);
  };

  const fetchAccountData = () => {
    if (!isValidId(riotId)) {
      setErrorMsg(errorMessages.INVALID_FORMAT);
      // set error code here
      return;
    }

    setErrorMsg("");
  };

  return (
    <>
      <div className='col-md-12 input-container'>
        <input
          className='input-box'
          type='text'
          id='riotId'
          placeholder='Enter Riot ID (e.g. Walls#7777)'
          onChange={setNameAndTag}
        />
        <button onClick={fetchAccountData}></button>
        <div className='errorMsg'>{errorMsg}</div>
      </div>
    </>
  );
};
