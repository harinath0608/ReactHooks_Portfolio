import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";


test("Increment,decrement Testing", async () => {
  render(<Counter />);
  const user = userEvent.setup();

  const count = screen.getByTestId("count-value");
  const incbtn = screen.getByText("inc");
  const decbtn = screen.getByText("dec");

  await user.click(incbtn);
  expect(count).toHaveTextContent("1");

  await user.click(decbtn);
  expect(count).toHaveTextContent("0");
});
