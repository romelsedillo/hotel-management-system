import React from "react";
import { Input } from "@nextui-org/react";

export default function App({ onValueChange }) {
  const [value, setValue] = React.useState("");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);


  React.useEffect(() => {
    onValueChange && onValueChange(value);
  }, [value, onValueChange]);

  return (
    <Input
    name="email"
      isRequired
      isClearable
      value={value}
      type="email"
      label="Email"
      size="sm"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="w-full"
      
    />
  );
}
