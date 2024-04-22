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
  const [errorMessage, setErrorMessage] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const showToastMessage = () => {
    toast.success("Login Successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const wrongPassword = () => {
    setErrorMessage("Incorrect Password!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    axios
      .post("http://localhost:3001/admin", { email, password })
      .then((response) => {
        console.log(response);
        const result = response.data;

        if (result === "Success") {
          // navigate to manager dashboard
          navigate();
          showToastMessage();
        } else if (result === "Incorrect password") {
          wrongPassword();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border-[#7828C8] border rounded-[5px] p-10 w-full"
    >
      <div className="flex justify-between">
        <Input
          color="secondary"
          isClearable
          isRequired
          variant="bordered"
          size="sm"
          type="email"
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          classNames="w-full outline-none text-[#7828C8]"
        />
      </div>
      <div className="flex justify-between">
        <Input
          color="secondary"
          isRequired
          size="sm"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="bordered"
          errorMessage={errorMessage}
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
      </div>
      <Button radius="sm" type="submit" color="secondary" className="w-full">
        login
      </Button>
    </form>
  );
};

export default Form;
