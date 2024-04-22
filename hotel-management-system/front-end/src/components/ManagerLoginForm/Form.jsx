import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import Email from "./Email"
// import Password from "./Password"
// import Button from "./Button"

const Form = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const showToastMessage = () => {
    toast.success("Login Successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const wrongPassMessage = () => {
    toast.success("Login Failed!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/manager", { email, password })
      .then((response) => {
        console.log(response);
        const result = response.data;

        if (result === "Success") {
          navigate("/admin-dashboard/manage-rooms");
          // window.location.reload();
          showToastMessage();
        }else if (result === "incorrect password") {
          wrongPassMessage();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border p-10 w-full"
    >
      <div className="flex justify-between">
        <Input
          isClearable
          isRequired
          variant="bordered"
          size="sm"
          type="email"
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          classNames="w-full focus:outline-none"
        />
      </div>
      <div className="flex justify-between">
        <Input
          isRequired
          size="sm"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="bordered"
          // errorMessage={result.data === "incorrect password" ? "" : "Please enter a valid email"}
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
          className="w-full"
        />
        {/* <Input
          size="sm"
          variant="bordered"
          type="password"
          label="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full"
        /> */}
      </div>
      <Button radius="sm" type="submit" color="primary" className="w-full">
        login
      </Button>
    </form>
  );
};

export default Form;
