import userEvent from "@testing-library/user-event";

import { render, screen } from "../../../tests/utils";
import { cheeses } from "../../../tests/testsData";

import CheesesList from ".";

describe("Given CheesesList Component", () => {
  it("Then should not crash during render", () => {
    render(<CheesesList milkTypes={[]} cheeses={cheeses} />);
  });

  it("When cheeses is provided, Then should display list of cheeses", () => {
    // TODO
  });

  it("When user search cheeses, Then should call onSearch", () => {
    // TODO
  });

  it("When user select a milk type, Then should call onSelectMilkType", () => {
    // TODO
  });
});
