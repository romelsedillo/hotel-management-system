// import Form from "../components/AdminLoginForm/Form"

const ManagerLogin = () => {
    return (
      <div className=" h-screen w-full px-36 py-10">
        <div className="w-full mt-5 border p-20 ">
          <h1 className="">Manager Login</h1>
          <form action="" className="flex flex-col gap-4 border p-10 w-[50%]">
            <div className="flex justify-between">
              <label htmlFor="email">Email: </label>
              <input type="email" placeholder="" autoComplete="off" name="email"className="border px-3 py-1"/>
            </div>
            <div className="flex justify-between">
              <label htmlFor="password">Password: </label>
              <input type="password" placeholder="" name="password" className="border px-3 py-1"/>
            </div>
            <button type="submit" className=" bg-orange-400 py-1">login</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ManagerLogin;
  