import React from "react";
import { shallow } from "enzyme";
import MatchList from "./MatchList";

describe("Body component", () => {
  test("it renders the Body component with a background image", () => {
    const wrapper = shallow(<MatchList />);
    expect(wrapper.find("img")).toBeTruthy();
  });
});
