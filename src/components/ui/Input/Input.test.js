import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

describe("Given Input Component", () => {
  it("Then should not crash during render", () => {
    render(<Input />);
  });

  it("When component is disabled, then I can't use it", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("When I type inside, then should call onChange", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "michel");

    expect(onChange).toHaveBeenCalledTimes(6);
  });
});
