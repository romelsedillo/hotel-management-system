import { Avatar } from "@nextui-org/react";


export default function AvatarComponent() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar
        isBordered
        color="default"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        className=" cursor-pointer"
        />
      <Avatar
        isBordered
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        className=" cursor-pointer"
        />
      <Avatar
        isBordered
        color="secondary"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        className=" cursor-pointer"
        />
      <Avatar
        isBordered
        color="success"
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        className=" cursor-pointer"
        />
      <Avatar
        isBordered
        color="warning"
        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        className=" cursor-pointer"
        />
      <Avatar
        isBordered
        color="danger"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className=" cursor-pointer"
      />
    </div>
  );
}
