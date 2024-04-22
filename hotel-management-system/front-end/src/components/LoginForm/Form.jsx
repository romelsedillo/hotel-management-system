import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import Email from "./Email";
// import Password from "./Password";
// import Button from "./Button";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";

import { toast } from "react-toastify";

const Form = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success("Login Successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/guest", { email, password })
      .then((result) => {
        console.log(result);
        console.log(e.value);

        if (result.data === "Success") {
          navigate("/guest-dashboard");
          showToastMessage()
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-[100%] flex flex-col gap-3 px-10 py-6 rounded-lg bg-[#ffffff]"
    >
      <h1 className="text-center text-[30px] font-bold text-[#7828C8]">
        Hello!
      </h1>
      <h6 className="text-center text-sm font-bold text-[#676666] mb-3">
        We are happy to see you again!
      </h6>

      {/* <Email onValueChange={email}/> */}
      {/* <Password onChange={(e) => setPassword(e.target.value)} /> */}
      {/* <Button /> */}
      <Input
        isRequired
        isClearable
        variant="bordered"
        color="primary"
        size="sm"
        type="email"
        label="Email"
        className="w-full"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        isRequired
        label="Password"
        variant="bordered"
        color="primary"
        size="sm"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
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
      <Button type="submit" color="secondary" size="md" className=" rounded-md">
        Login
      </Button>

      <div className=" flex items-center justify-center"></div>
      <div className=" ">
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
