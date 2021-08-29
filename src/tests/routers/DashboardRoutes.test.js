import React from "react";
import DashboardRoutes from "../../routers/DashboardRoutes";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

describe("Testing in DashboardRoutes", () => {
  test("Component should show correctly", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        name: "Cesar",
        logged: "true",
      },
    };

    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <DashboardRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("nav.navbar span.nav-link").text().trim()).toBe(
      contextValue.user.name
    );
  });
});
