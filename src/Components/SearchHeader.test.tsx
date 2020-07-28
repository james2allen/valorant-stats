import React from "react";
import { shallow } from "enzyme";
import expect from "expect";
import SearchHeader from "./SearchHeader";
import history from "../history";

describe("Search Header component", () => {
  test("it renders the Header component with capitalized text", () => {
    const wrapper = shallow(<SearchHeader history={history} />);
    expect(wrapper.find("h1").text()).toEqual("TEST APP");
  });
});
