import React from "react";
import SearchBox from "./SearchBox";
import { create } from "react-test-renderer";

describe("SearchBox component", () => {
  test("it renders the SearchBox component", () => {
    const component = create(<SearchBox />);
    const instance = component.getInstance();
    expect(instance).toBeTruthy();
  });
});
