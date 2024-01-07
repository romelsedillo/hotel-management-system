import Homebg from "../assets/images/bedroom5.jpg";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div
      className=" bg-cover bg-center h-screen w-full flex justify-end"
      style={{ backgroundImage: `url(${Homebg})` }}
    >
      <div className="w-[30%] mt-5 mr-[80px]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
