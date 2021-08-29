import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import Navbar from "../../../components/ui/Navbar";
import { MemoryRouter, Router } from "react-router-dom";
import { types } from "../../../types/types";

describe("Testing in Navbar component", () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contextValue = {
    user: { name: "Cesar", logged: true },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <MemoryRouter>
      <AuthContext.Provider value={contextValue}>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </AuthContext.Provider>
    </MemoryRouter>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Component should show correctly", () => {
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("nav.navbar span.nav-link").text().trim()).toBe(
      contextValue.user.name
    );
  });

  test("Component should simulate logout and call history", () => {
    const btnLogout = wrapper.find("button.btn");

    btnLogout.simulate("click", { preventDefault: jest.fn() });

    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });

    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
