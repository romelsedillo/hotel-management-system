// import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function GoogleButton() {
  // const navigate = useNavigate();

  // const handleGoogleLogin = async () => {
  //   const result = await signInWithPopup(auth, provider);
  //   navigate("/dashboard");

  //   console.log(result);
  // };
  return (
    <button
      // onClick={handleGoogleLogin}
      className="w-full py-2 px-4 bg-red-600 text-white rounded-md flex items-center justify-center space-x-2 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
    >
      <span>Login with Google</span>
      <FaGoogle className="text-xl" />
    </button>
  );
}

export default GoogleButton;
