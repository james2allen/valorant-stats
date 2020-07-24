import React from "react";
import { SearchBox } from "./SearchBox";
import { shallow } from "enzyme";

describe("SearchBox component", () => {
  test("it renders the SearchBox component", () => {
    const component = shallow(<SearchBox />);
    expect(component.find("SearchBox")).toBeTruthy();
  });
});
