/** Imports */
import React, { useState, useEffect } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { History } from "history";

import { isValidId } from "../Account/Validation";
import { getPuuid } from "../Account/AccountApi";

import "./SearchBox.scss";

enum errorMessages {
  NOT_FOUND = "Could not find user, please try a different name and tag combination.",
  BAD_GATEWAY = "",
  INVALID_CHARACTERS = "You have entered an invalid character in the searchbox",
  INVALID_FORMAT = `The format of the id you have entered is invalid, please follow the format: Name#123`,
}

export const SearchBox = (props: { history: History }) => {
  const controller = new AbortController();

  const [riotId, setRiotId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [puuid, setPuuid] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (riotId.length)
      getPuuid(riotId).then((response) => {
        if (response) {
          setPuuid(response.puuid);
          setOptions([`${response.gameName}#${response.tagLine}`]);
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

  const goToAccountPage = () => {
    controller.abort();
    props.history.push(`/account/${puuid}`);
  };

  const getSearchClass = () => {
    if (props.history.location.pathname === "/") {
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
          onChange={goToAccountPage}
        />
      </div>
    </>
  );
};
