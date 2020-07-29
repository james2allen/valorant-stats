import SearchPage from "./SearchPage";
import React from "react";
import { shallow } from "enzyme";

describe("Body component", () => {
  test("it renders the Body component with a background image", () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper.find("img")).toBeTruthy();
  });
});
