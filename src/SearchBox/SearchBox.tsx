/** Imports */
import React, { useState, useEffect } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "./SearchBox.scss";
import { isValidId } from "./Validation";
import { RegionSelect } from "./RegionSelect";
import { getAccount } from "../Api/Api";

enum errorMessages {
  NOT_FOUND = "Could not find user, please try a different name and tag combination.",
  BAD_GATEWAY = "",
  INVALID_CHARACTERS = "You have entered an invalid character in the searchbox",
  INVALID_FORMAT = `The format of the id you have entered is invalid, please follow the format: Name#123`,
}

export const SearchBox = () => {
  const [riotId, setRiotId] = useState("");
  useEffect(() => {
    getAccount(riotId).then(() => {});
  });

  const [state, setState] = useState({ isLoading: false, options: [] });
  const [errorMsg, setErrorMsg] = useState("");

  const fetchAccountData = (query: string) => {
    if (!isValidId(riotId)) {
      setErrorMsg(errorMessages.INVALID_FORMAT);
      // set error code here
      return;
    }

    setState({ isLoading: true, options: [] });
    setRiotId(query);
    setErrorMsg("");
  };

  return (
    <>
      <div className='col-md-12 input-container'>
        <RegionSelect></RegionSelect>
        <AsyncTypeahead
          placeholder='Enter Riot ID (e.g. Walls#7777)'
          isLoading={state.isLoading}
          onSearch={fetchAccountData}
          options={state.options}
        />
      </div>
    </>
  );
};
