import React from "react";
import { SearchBox } from "./SearchBox";
import { shallow } from "enzyme";
import history from "../history";

describe("SearchBox component", () => {
  test("it renders the SearchBox component", () => {
    const component = shallow(<SearchBox history={history} />);
    expect(component.find("SearchBox")).toBeTruthy();
  });
});
