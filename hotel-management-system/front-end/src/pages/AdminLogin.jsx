// import Form from "../components/AdminLoginForm/Form"

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { EyeFilledIcon } from "./EyeFilledIcon";
// import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success("Login Successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/admin", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/admin-dashboard");
          window.location.reload();
          showToastMessage();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="w-full flex flex-col items-center border p-16 ">
        <div className="text-center mb-4">
          <h1 className="text-[20px]">Admin Login</h1>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 border-[1px] border-[black] p-10 w-[40%]"
        >
          <div className="flex justify-between">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              placeholder=""
              autoComplete=""
              name="email"
              className="border-[1px] border-[black] px-3 py-1 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder=""
              name="password"
              className="border-[1px] border-[black] px-3 py-1 outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" bg-orange-400 py-1 rounded-[5px] text-white"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
