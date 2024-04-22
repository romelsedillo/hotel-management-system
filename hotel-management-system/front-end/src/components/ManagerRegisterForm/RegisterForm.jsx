import { useState } from "react";
import axios from "axios";

const ManagerRegister = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/manager-register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };
  return (
    <div className="h-screen w-full px-36 py-10">
      <h1>Manager Register</h1>
      <div>
        <form
          action=""
          className="w-[40%] border p-10  flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between">
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              name="name"
              autoComplete=""
              className="border px-2 py-1"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              autoComplete=""
              className="border px-2 py-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="border px-2 py-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className=" bg-orange-400 px-2 py-1">
              register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManagerRegister;
