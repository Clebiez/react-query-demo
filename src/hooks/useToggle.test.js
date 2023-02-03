import { renderHook } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("Given useToggle hook", () => {
  test("When useToggle is invoked, Then toggle should be false", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);
    expect(typeof result.current.toggleValue).toBe("function");
  });

  test("When toggleValue is called, Then toggle should be true", async () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
    result.current.toggleValue();
    expect(result.current.value).toBe(true);
  });

  test("When toggleValue is called with false, Then toggle should be false", async () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
    result.current.toggleValue(false);
    expect(result.current.value).toBe(false);
  });
});
