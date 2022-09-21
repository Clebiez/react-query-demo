import { useState } from "react";

export const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (newValue) => {
    setValue((currentValue) =>
      newValue !== undefined ? newValue : !currentValue
    );
  };

  return { value, toggleValue };
};
