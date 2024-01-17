import Form from "../components/LoginForm/Form";
import Homebg from "../assets/images/bedroom5.jpg";

const Login = () => {
  return (
    <div
      className=" bg-cover bg-center h-screen w-full flex justify-center"
      style={{ backgroundImage: `url(${Homebg})` }}
    >
      <div className="w-[30%] mt-5">
        <Form />
      </div>
    </div>
  );
};

export default Login;

