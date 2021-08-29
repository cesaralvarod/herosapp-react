import React from "react";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Testing in authReducer", () => {
  test("Reducer should return default state", () => {
    const defState = { logged: true };

    const state = authReducer(defState, {});

    expect(state).toEqual(defState);
  });

  test("Reducer should auth and put user's name", () => {
    const action = { type: types.login, payload: { name: "Cesar" } };

    const stateExpected = { name: action.payload.name, logged: true };

    const state = authReducer({}, action);

    expect(state).toEqual(stateExpected);
  });

  test("Reducer should delete user's name and set logged as false", () => {
    const stateExpected = { logged: false };

    const state = authReducer(
      { name: "Cesar", logged: true },
      { type: types.logout }
    );

    expect(state).toEqual(stateExpected);
  });
});
