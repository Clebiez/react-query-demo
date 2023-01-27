import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import CheesesListItem from ".";

import { cheese } from "../../../../tests/testsData";
import { render, screen } from "../../../../tests/utils";

describe("Given CheesesListItem Component", () => {
  it("Then should not crash during render", () => {
    render(<CheesesListItem cheese={cheese} />);
  });

  it("When user click on vote button, Then should call onClickOnVoteCheese", async () => {
    // TODO
  });

  it("When cheese has already been voted by the user, Then vote button should be disabled", async () => {
    // TODO
  });

  it("When user click on detail button, Then he should be redirected to the detail page", async () => {
    // TODO
  });
});
