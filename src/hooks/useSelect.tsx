import { useState, ChangeEvent } from "react";

const useSelect = (initialValue: string | undefined) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return { value, setValue, onChange };
};

export default useSelect;
