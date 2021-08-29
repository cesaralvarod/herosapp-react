import React from "react";
import { mount } from "enzyme";
import SearchScreen from "../../../components/search/SearchScreen";
import { MemoryRouter, Route } from "react-router-dom";

describe("Testing in SearchScreen", () => {
  test("Component should render correctly", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("Component should show batman", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("h5.card-title").text().trim()).toBe("Batman");
  });

  test("Component should show an error if hero is not found", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=sometext"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("div.alert.alert-danger").text().trim()).toBe(
      "No results of sometext"
    );
  });

  test("Component should call push of history", () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=sometext"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );

    const event = {
      target: {
        name: "search",
        value: "superman",
      },
    };

    wrapper.find("input").simulate("change", event);

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(history.push).toHaveBeenCalledWith(`?q=${event.target.value}`);
  });
});
