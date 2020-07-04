import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";
import isIdValid from "./Validation";

describe("SearchBox component", () => {
  test("it renders the SearchBox component", () => {
    const component = shallow(<SearchBox />);
    expect(component.find("SearchBox")).toBeTruthy();
  });

  test("it validates that Riot IDs and tags are entered in the correct format", () => {
    // Truthy formats
    expect(isIdValid("newName#NA1")).toBeTruthy();
    expect(isIdValid("new Name#2345")).toBeTruthy();

    // Falsy formats
    expect(isIdValid("newName1")).toBeFalsy();
    expect(isIdValid("#")).toBeFalsy();
    expect(isIdValid("#sdf")).toBeFalsy();
    expect(isIdValid("name ##1")).toBeFalsy();
  });
});
