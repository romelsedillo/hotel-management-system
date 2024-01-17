import Homebg from "../assets/images/bedroom5.jpg";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div
      className=" bg-cover bg-center h-screen w-full flex justify-center"
      style={{ backgroundImage: `url(${Homebg})` }}
    >
      <div className="w-[40%] py-4">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
