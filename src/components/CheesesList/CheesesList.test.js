import userEvent from "@testing-library/user-event";

import { render, screen } from "../../../tests/utils";
import { cheeses, milkTypes } from "../../../tests/testsData";

import CheesesList from ".";

describe("Given CheesesList Component", () => {
  it("Then should not crash during render", () => {
    render(<CheesesList milkTypes={[]} cheeses={cheeses} />);
  });

  it("When cheeses is provided, Then should display list of cheeses", () => {
    render(<CheesesList milkTypes={[]} cheeses={cheeses} />);
    expect(screen.getByText("Camembert")).toBeVisible();
    expect(screen.getByText("Comté")).toBeVisible();
    expect(screen.getByText("Mozarella di Buffala")).toBeVisible();
  });

  it("When cheeses is not provided, Then should empty screens", () => {
    render(<CheesesList milkTypes={[]} cheeses={[]} />);
    expect(screen.getByText("Pas de fromage à affiner")).toBeVisible();
  });

  it("When user select a milk type, Then should call onSelectMilkType", async () => {
    const onSelectMilkType = jest.fn();
    const user = userEvent.setup();
    render(
      <CheesesList
        milkTypes={milkTypes}
        cheeses={[]}
        onSelectMilkType={onSelectMilkType}
      />
    );

    await user.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Chèvre" })
    );
    expect(onSelectMilkType).toHaveBeenCalledTimes(1);
    expect(onSelectMilkType).toHaveBeenCalledWith("2");
  });

  it("When user search cheeses, Then should call onSearch", async () => {
    jest.useFakeTimers();
    const onSearch = jest.fn();
    const user = userEvent.setup({ delay: null });

    render(
      <CheesesList milkTypes={[]} cheeses={cheeses} onSearch={onSearch} />
    );
    await user.type(screen.getByRole("searchbox"), "Couic couic");
    jest.runAllTimers();
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("Couic couic");

    jest.useRealTimers();
  });
});
