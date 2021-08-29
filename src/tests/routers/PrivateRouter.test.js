import React from "react";
import { mount } from "enzyme";
import { PrivateRouter } from "../../routers/PrivateRouter";
import { MemoryRouter } from "react-router-dom";

describe("Testing in component PrivateRouter", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  // check storage

  Storage.prototype.setItem = jest.fn();

  test("Should show Component if user is logging", () => {
    const testComponent = () => <span>Test component</span>;

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuthenticated={true}
          component={testComponent}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(true);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      props.location.pathname
    );
  });

  test("Should don't show Component if user is not logging", () => {
    const testComponent = () => <span>Test component</span>;

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuthenticated={false}
          component={testComponent}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(false);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      props.location.pathname
    );
  });
});
