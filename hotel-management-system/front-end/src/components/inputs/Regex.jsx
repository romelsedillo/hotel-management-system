import React from "react";
import { Input } from "@nextui-org/react";

export default function App() {
  const [value, setValue] = React.useState("");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <Input
      isRequired
      isClearable
      value={value}
      type="email"
      label="Email"
      variant="bordered"
      size="sm"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="w-full"
    />
  );
}
