import { Input } from "@nextui-org/react";

export default function Email() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
    </div>
  );
}
