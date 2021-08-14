import React from "react";
import { shallow } from "enzyme";
import HerosApp from "../HerosApp";

describe("Testing in HerosApp.js", () => {
  test("Testing in component <HerosApp />", () => {
    const wrapper = shallow(<HerosApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
