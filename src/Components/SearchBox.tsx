/** Imports */
import React, { useState, useEffect, useContext } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import { isValidId } from "../account/Validation";
import { getPuuid } from "../account/AccountApi";

import "./SearchBox.scss";
import { AccountContext } from "../account/AccountContext";
import { useHistory } from "react-router-dom";

enum errorMessages {
  NOT_FOUND = "Could not find user, please try a different name and tag combination.",
  BAD_GATEWAY = "",
  INVALID_CHARACTERS = "You have entered an invalid character in the searchbox",
  INVALID_FORMAT = `The format of the id you have entered is invalid, please follow the format: Name#123`,
}

interface TypeaheadOption {
  gameName: string;
  tagLine: string;
  puuid: string;
}

export const SearchBox = () => {
  const history = useHistory();

  const [riotId, setRiotId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<TypeaheadOption[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const { setAccount, setPuuid } = useContext(AccountContext);

  // Called by the typeahead to get the puuid of the username
  useEffect(() => {
    if (riotId.length)
      getPuuid(riotId).then((response) => {
        if (response) {
          setOptions([
            {
              gameName: response.gameName,
              tagLine: response.tagLine,
              puuid: response.puuid,
            },
          ]);
          setIsLoading(false);
        }
      });
  }, [riotId]);

  const fetchAccountData = (query: string) => {
    if (!isValidId(query)) {
      setErrorMsg(errorMessages.INVALID_FORMAT);
      // set error code here
      return;
    }

    setIsLoading(true);
    setRiotId(query);
    setErrorMsg("");
  };

  const goToAccountPage = ([option]: TypeaheadOption[]) => {
    setAccount({
      ...option,
    });
    setPuuid(option.puuid);
    history.push(`/account/${option.puuid}`);
  };

  const getSearchClass = () => {
    if (history.location.pathname === "/") {
      return "main-search";
    } else {
      return "nav-search";
    }
  };

  return (
    <>
      <div className={getSearchClass()}>
        <AsyncTypeahead
          id='searchRiotId'
          placeholder='Enter Riot ID (e.g. Walls#8888)'
          isLoading={isLoading}
          onSearch={fetchAccountData}
          options={options}
          labelKey={(option) => `${option.gameName}#${option.tagLine}`}
          onChange={goToAccountPage}
        />
      </div>
    </>
  );
};
