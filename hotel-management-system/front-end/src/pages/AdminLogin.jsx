import Homebg from "../assets/images/bedroom5.jpg";
import Form from "../components/AdminLoginForm/Form"


const AdminLogin = () => {
    return (
        <div
          className=" bg-cover bg-center h-screen w-full flex justify-end"
          style={{ backgroundImage: `url(${Homebg})` }}
        >
          <div className="w-[30%] mt-5 mr-[80px]">
            <Form/>
          </div>
        </div>
      );
};

export default AdminLogin;
