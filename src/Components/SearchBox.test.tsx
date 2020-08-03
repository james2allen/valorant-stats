import React from "react";
import { shallow } from "enzyme";
import history from "../history";
import { SearchBox } from "./SearchBox";

describe("SearchBox component", () => {
  test("it renders the SearchBox component", () => {
    const component = shallow(<SearchBox history={history} />);
    expect(component.find("SearchBox")).toBeTruthy();
  });
});
