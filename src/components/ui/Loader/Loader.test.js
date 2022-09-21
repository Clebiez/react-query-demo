import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Loader from ".";

describe("Given Loader Component", () => {
  it("Then should not crash during render", () => {
    render(<Loader />);
  });

  //   it("When isLoading is true then false, Then should display children", async () => {
  //     const { rerender } = render(<Loader isLoading={true}>Coucou</Loader>);
  //     expect(screen.queryByText("Coucou")).toBeNull();

  //     rerender(<Loader isLoading={false}>Coucou</Loader>);
  //     expect(screen.getByText("Coucou")).toBeVisible();
  //   });
});
