import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="login_Form bg-gradient-to-br from-purple-300 to-pink-100 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500">
              Login
            </h2>
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Email Address"
              value=""
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>  

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              value=""
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>

          <div className="mb-5">
            <button
              type="button"
              className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md"
            >
              Signup
            </button>
          </div>

          <div>
            <h2 className="text-black">
              Don't Have an account{" "}
              <span
                onClick={() => navigate("/signup")}
                className=" text-pink-500 font-bold cursor-pointer"
              >
                Signup
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
