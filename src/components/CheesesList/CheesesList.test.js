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

  it("When user select a milk type, Then should call onSelectMilkType", () => {
    // TODO
  });

  it("When user search cheeses, Then should call onSearch", () => {
    // TODO
  });
});
