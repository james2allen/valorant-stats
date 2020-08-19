import React from "react";
import { shallow } from "enzyme";
import expect from "expect";
import SearchHeader from "./SearchHeader";

describe("Search Header component", () => {
  test("it renders the Header component with capitalized text", () => {
    const wrapper = shallow(<SearchHeader />);
    expect(wrapper.find("h1").text()).toEqual("TEST APP");
  });
});
