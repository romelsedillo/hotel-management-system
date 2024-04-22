import Form from "../components/AdminLoginForm/Form";

const AdminLogin = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center p-10 ">
      <div className="w-[35%] flex flex-col gap-8">
        <div>
          <h1 className="text-center text-[#7828C8] ">Admin Login</h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default AdminLogin;
