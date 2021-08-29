import React from "react";
import { mount } from "enzyme";
import HeroScreen from "../../../components/heroes/HeroScreen";
import { MemoryRouter, Route } from "react-router-dom";

describe("Testing in HeroScreen component", () => {
  test("Component should redirect to '/' if URL has not params", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("Redirect").exists()).toBeTruthy();
  });

  test("Component should render an hero if URL has params", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(".row").exists()).toBeTruthy();
  });
});
