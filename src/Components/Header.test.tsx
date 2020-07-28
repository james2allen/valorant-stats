import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import expect from "expect";

describe("Header component", () => {
  test("it renders the Header component with capitalized text", () => {
    const wrapper = shallow(<Header appName='test app' />);
    expect(wrapper.find("h1").text()).toEqual("TEST APP");
  });
});
