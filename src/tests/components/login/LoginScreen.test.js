import React from "react";
import { mount } from "enzyme";
import LoginScreen from "../../../components/login/LoginScreen";
import { AuthContext } from "../../../auth/AuthContext";

describe("Testing in LoginScreen", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Cesar",
      logged: true,
    },
  };

  const history = { replace: jest.fn() };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );

  test("Component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should simulate click in login button", () => {
    const btnLogin = wrapper.find("button.btn");

    btnLogin.simulate("click");

    expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
  });
});
