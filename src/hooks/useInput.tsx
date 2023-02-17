// 자주 쓰는 hook 함수 컴포넌트 작성. 아래에 예시.
import { useState, ChangeEvent } from "react";

const useInput = (initialValue: string | undefined) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, setValue, onChange };
};

export default useInput;
