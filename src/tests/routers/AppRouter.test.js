import React from "react";
import { mount } from "enzyme";
import AppRouter from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Testing in AppRouter", () => {
  test("Should show component Login if user is not authenticated", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("h1").text()).toBe("Login");
  });

  test("Should show component Login if user is authenticated", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
