/** Imports */
import React, { useState } from "react";
import "./SearchBox.scss";
import { Dropdown } from "react-bootstrap";

export enum Regions {
  NA1 = "NA1",
  BR1 = "BR1",
  EUW1 = "EUW1",
  EUN1 = "EUN1",
  JP1 = "JP1",
  KR = "KR",
  LA1 = "LA1",
  LA2 = "LA2",
  OC1 = "OC1",
  TR1 = "TR1",
  RU = "RU",
}

export const RegionSelect = () => {
  const [locale, setLocale] = useState(Regions.NA1);

  const DropdownItems = Object.values(Regions).map((region) => (
    <Dropdown.Item key={region} onClick={() => setLocale(region)}>
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
