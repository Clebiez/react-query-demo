import userEvent from "@testing-library/user-event";

import { act } from "react-dom/test-utils";
import CheesesListItem from ".";

import { cheese } from "../../../../tests/testsData";
import { render, screen } from "../../../../tests/utils";

let mockCheeseIsVoted = false;
jest.mock("../../../services/hooks/useCheeseIsVoted", () => {
  return () => ({
    cheeseIsVoted: mockCheeseIsVoted,
  });
});

const mockOnClick = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    Link: ({ to, children }) => (
      <button onClick={() => mockOnClick(to)}>{children}</button>
    ),
  };
});

describe("Given CheesesListItem Component", () => {
  beforeEach(() => {
    mockCheeseIsVoted = false;
  });

  it("Then should not crash during render", () => {
    const { getByText } = render(<CheesesListItem cheese={cheese} />);
    expect(getByText(cheese.name)).toBeVisible();
  });

  it("When user click on vote button, Then should call onClickOnVoteCheese", async () => {
    const onClickOnVoteCheese = jest.fn();
    const user = userEvent.setup();
    render(
      <CheesesListItem
        cheese={cheese}
        onClickOnVoteCheese={onClickOnVoteCheese}
      />
    );
    await user.click(screen.getByRole("button", { name: "Voter" }));

    expect(onClickOnVoteCheese).toHaveBeenCalledTimes(1);
  });

  it("When cheese has already been voted by the user, Then vote button should be disabled", async () => {
    mockCheeseIsVoted = true;
    render(<CheesesListItem cheese={cheese} onClickOnVoteCheese={jest.fn()} />);
    expect(screen.getByRole("button", { name: "Voter" })).toBeDisabled();
  });

  it("When user click on detail button, Then he should be redirected to the detail page", async () => {
    const user = userEvent.setup();
    render(<CheesesListItem cheese={cheese} />);
    const detailButton = screen.getByRole("button", { name: "Détail" });
    await user.click(detailButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(`/cheeses/${cheese.id}`);
  });
});
