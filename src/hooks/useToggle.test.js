import { renderHook } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("Given useToggle hook", () => {
  test("When useToggle is invoked, Then toggle should be false", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);
    expect(typeof result.current.toggleValue).toBe("function");
  });
});
