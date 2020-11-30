import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  let store;
  beforeAll(() => {
    store = { getState: jest.fn() };
  })
  console.log(store)
  const { getByText } = render(<Provider><App store={store} /></Provider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
