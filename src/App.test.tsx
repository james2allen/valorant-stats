/** Imports */
import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App component", () => {
  test("it renders the Body component with a background image", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header")).toBeTruthy();
    expect(wrapper.find("Footer")).toBeTruthy();
    expect(wrapper.find("Body")).toBeTruthy();
  });
});
