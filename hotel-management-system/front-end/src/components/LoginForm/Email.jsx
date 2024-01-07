import { Input } from "@nextui-org/react";
// isRequired
//isClearable
export default function App() {
  return (
    <Input
      isClearable
      isRequired
      variant="bordered"
      color="secondary"
      size="sm"
      type="email"
      label="Email"
      className="w-full"
    />
  );
}
