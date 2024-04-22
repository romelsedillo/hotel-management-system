import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegisterButton from "./RegisterButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required *"),
    lastName: yup.string().required("Last name is required *"),
    age: yup
      .number("Age must be a number. *")
      .typeError("Age must be a valid number. *")
      .positive("Age is invalid. *")
      .integer("Age is invalid. *")
      .required("Age is required. *"),
    gender: yup.string().required("Gender is required. *"),
    email: yup
      .string()
      .required("Email is required *")
      .email("Invalid email format *"),
    password: yup
      .string()
      .required("Password is required *")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character *"
      ),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const { firstName, lastName, age, gender, email, password } = data;
    axios
      .post("http://localhost:3001/register", {
        firstName,
        lastName,
        age,
        gender,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/guest-dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="pt-6 pb-4 px-8 w-[100%] flex flex-col rounded-lg border bg-[#ffffff]"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <h2 className="text-2xl mb-2 font-semibold text-center">Register</h2>
      <div className=" flex items-center justify-center gap-10">
        <div className="mb-1 w-full">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            First name:
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className={`w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none ${
              errors.firstName
                ? "focus:border-red-500"
                : "focus:border-green-500"
            }`}
          />
          <div className=" h-2 mt-1">
            {errors.firstName && (
              <p className="text-red-500 text-[10px]">
                {errors.firstName?.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-1 w-full">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Last name:
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className={`w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none ${
              errors.lastName
                ? "focus:border-red-500"
                : "focus:border-green-500"
            }`}
          />
          <div className="h-2 mt-1">
            {errors.lastName && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.lastName?.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="mb-4 w-full">
          <label
            htmlFor="age"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Age:
          </label>
          <input
            type="number"
            id="age"
            {...register("age")}
            className={`w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none ${
              errors.age ? "focus:border-red-500" : "focus:border-green-500"
            }`}
          />
          <div className=" h-2 mt-1">
            {errors.age && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.age?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="gender"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            {...register("gender")}
            className={`w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none ${
              errors.gender ? "focus:border-red-500" : "focus:border-green-500"
            }`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div className=" h-2 mt-1">
            {errors.gender && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.gender?.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none ${
            errors.email ? "focus:border-red-500" : "focus:border-green-500"
          }`}
        />
        {/* errors */}
        <div className=" h-2 mt-1">
          {errors.email && (
            <p className="text-red-500 text-[10px] mt-1">
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>
      <div className=" w-full flex items-center justify-center gap-10">
        <div className="mb-4 relative w-full">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password")}
            className={`w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none ${
              errors.password
                ? "focus:border-red-500"
                : "focus:border-green-500"
            }`}
          />
          <div
            className={`absolute inset-y-0 right-0 flex items-center pr-2 mt-10 opacity-50 ${
              errors.password
                ? "transform translate-y-[-12px]"
                : "transform translate-y-[-12px]"
            }`}
          >
            {showPassword ? (
              <FaEyeSlash
                onClick={toggleShowPassword}
                className="cursor-pointer"
              />
            ) : (
              <FaEye onClick={toggleShowPassword} className="cursor-pointer" />
            )}
          </div>
          {/* errors */}
          <div className=" h-2 mt-1">
            {errors.password && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4 relative w-full">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Confirm password:
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            {...register("confirmPassword")}
            className={`w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none ${
              errors.confirmPassword
                ? "focus:border-red-500"
                : "focus:border-green-500"
            }`}
          />
          <div
            className={`absolute inset-y-0 right-0 flex items-center pr-2 mt-14 opacity-50 ${
              errors.confirmPassword
                ? "transform translate-y-[-20px]"
                : "transform translate-y-[-20px]"
            }`}
          >
            {showConfirmPassword ? (
              <FaEyeSlash
                onClick={toggleShowConfirmPassword}
                className="cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={toggleShowConfirmPassword}
                className="cursor-pointer"
              />
            )}
          </div>
          {/* errors */}
          <div className=" h-2 mt-1">
            {errors.confirmPassword && (
              <p className="text-red-500 text-[10px]">
                Passwords don&apos;t match *
              </p>
            )}
          </div>
        </div>
      </div>
      <RegisterButton />

      <div className="my-2 text-center">
        <p>Already have an account?</p>
        <a href="/login" className="text-indigo-600 hover:underline">
          Login here.
        </a>
      </div>
    </form>
  );
}

export default RegisterForm;
