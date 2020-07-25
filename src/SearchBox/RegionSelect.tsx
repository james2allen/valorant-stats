/** Imports */
import React, { useState } from "react";
import "./SearchBox.scss";
import { Dropdown } from "react-bootstrap";

export const RegionSelect = () => {
  const [locale, setLocale] = useState("NA1");

  const DropdownItems = [
    "BR1",
    "EUN1",
    "EUW1",
    "JP1",
    "KR",
    "LA1",
    "LA2",
    "NA1",
    "OC1",
    "TR1",
    "RU",
  ].map((region, index) => (
    <Dropdown.Item key={index} onClick={() => setLocale(region)}>
      {region}
    </Dropdown.Item>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle variant='primary' id='dropdown-basic'>
        {locale}
      </Dropdown.Toggle>
      <Dropdown.Menu>{DropdownItems}</Dropdown.Menu>
    </Dropdown>
  );
};
