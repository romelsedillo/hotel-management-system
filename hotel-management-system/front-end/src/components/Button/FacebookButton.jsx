// import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

function FacebookButton() {
  // const navigate = useNavigate();

  // const handleFacebookLogin = async () => {
  //   const result = await signInWithPopup(auth, provider);
  //   navigate("/dashboard");
  //   console.log(result);
  // };
  return (
    <button
      // onClick={handleFacebookLogin}
      className="w-full mt-2 py-2 px-4 bg-blue-600 text-white rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    >
      <span>Login with Facebook</span>
      <FaFacebook className="text-xl" />
    </button>
  );
}

export default FacebookButton;
