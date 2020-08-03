import React from "./node_modules/react";
import Footer from "./Footer";
import { shallow } from "./node_modules/enzyme";

test("renders footer", () => {
  const wrapper = shallow(<Footer appName='test app' />);
  expect(wrapper.find(".footer-text").text()).toEqual(
    "test app isn't endorsed by Riot Games and doesn't reflect the views or opinions of " +
      "Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot " +
      "Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc."
  );
});
