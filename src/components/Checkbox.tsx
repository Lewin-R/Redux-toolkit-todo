import { FC, useCallback, useId, useState } from "react";

/**
 * --
 * THIS COMPONENT IS ALREADY READY TO USE
 *
 * You don't need to do anything in here :)
 * --
 */

export interface CheckboxProps {
  isChecked?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  onChange = () => {},
}) => {
  const checkboxId = useId();
  const [isCheckedState, setIsCheckedState] = useState(isChecked);

  const handleChange = useCallback(() => {
    setIsCheckedState((prevState) => {
      onChange(!prevState);
      return !prevState;
    });
  }, [onChange]);

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={checkboxId}
        checked={isCheckedState}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={checkboxId}>
        {isChecked ? "Done" : "Open"}
      </label>
    </div>
  );
};
