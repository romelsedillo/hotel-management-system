import React from "react";




import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";

// import FacebookButton from "../Button/FacebookButton.jsx";
import GoogleButton from "../Button/GoogleButton";

const Form = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form
      action=""
      className="w-[100%] flex flex-col gap-3 px-10 py-6 rounded-lg border bg-[#ffffff]"
    >
      <h1 className="text-center text-[30px] font-bold text-[#7828C8]">Hello!</h1>
      <h6 className="text-center text-sm font-bold text-[#676666] mb-3">We are happy to see you again!</h6>
      
      <Input
        isClearable
        // isRequired
        variant="bordered"
        color="secondary"
        size="sm"
        type="email"
        label="Email"
        className="w-full"
      />
      <Input
        // isRequired
        label="Password"
        variant="bordered"
        color="secondary"
        size="sm"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="w-full outline-none"
      />
      <Button color="secondary" size="md" className=" rounded-md">
        Login
      </Button>

      <div className=" flex items-center justify-center">
          <hr className=" h-[2px] w-32 bg-gray-600" />
          <p className="  text-gray-900 text-md font-medium text-center mx-4">
            or
          </p>
          <hr className=" h-[2px] w-32 bg-gray-600" />
        </div>
        <div className=" ">
          {/* google login button */}
          <GoogleButton></GoogleButton>

          {/* facebook login button */}
          {/* <FacebookButton></FacebookButton> */}
          <div className="mt-4 text-center">
            <p>Don&apos;t have an account?</p>
            <a href="/register" className="text-indigo-600 hover:underline">
              Register here.
            </a>
          </div>
        </div>
    </form>
  );
};

export default Form;
