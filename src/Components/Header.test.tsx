import React from "./node_modules/react";
import Header from "./Header";
import { shallow } from "./node_modules/enzyme";
import expect from "./node_modules/expect";

describe("Header component", () => {
  test("it renders the Header component with capitalized text", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").text()).toEqual("TEST APP");
  });
});
