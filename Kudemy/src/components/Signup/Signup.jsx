import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const Name = e.target.name;
    const val = e.target.value;
    setInput((values) => ({ ...values, [Name]: val }));
  };
  const [error,setError] = useState("");

  const handleSubmit = (e) => {
    if(!input.name || !input.email || !input.password) {
      setError("Fill All fields");
      return;
    }
    setError("");
    e.preventDefault();
    console.log(input);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-center items-center h-screen"
    >
      <div className="login_Form bg-gradient-to-br from-purple-300 to-pink-100 px-8 py-6 border border-pink-100 rounded-xl shadow-xl">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-pink-500 ">
            Signup
          </h2>
        </div>
        <div>
          <div className="mb-3">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>

          <div className="mb-3">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>

          <div className="mb-5">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>
          <div className="flex justify-center mb-2 text-red-900">
            {error}
          </div>

          <div className="mb-5">
            <button
              // type="button"
              className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Signup
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-black">
            Have an account{" "}
            <span
              onClick={() => navigate("/login")}
              className=" text-pink-500 font-bold cursor-pointer"
            >
              Login
            </span>
          </h2>
        </div>
      </div>
    </form>
  );
};

export default Signup;
