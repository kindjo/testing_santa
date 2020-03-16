import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Button from "../Button/Button";

test("Button is rendered with the default add class", () => {
  const { getByText } = render(<Button>Button</Button>);
  const button = getByText(/button/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("button-add");
});

test("Button is rendered with the remove class", () => {
  const { getByText } = render(<Button remove>Remove</Button>);
  const button = getByText(/remove/i);
  expect(button).toHaveClass("button-remove");
});

test("Button is rendered with the submit class", () => {
  const { getByText } = render(<Button submit>Submit</Button>);
  const button = getByText(/submit/i);
  expect(button).toHaveClass("button-submit");
});

test("Button is disabled when the property disabled is set", () => {
  const { getByText } = render(<Button disabled>Button</Button>);
  const button = getByText(/button/i);
  expect(button).toBeDisabled();
});
