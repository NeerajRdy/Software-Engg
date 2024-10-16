import React, { useState } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          name,
          email,
          password
        }
      );
      if (response.status === 201) {
        toast.success("sign up successful");
        navigate("/user/login");
        console.log("Thanks for Joining:", response.data);
      } else if (response.status === 400) {
        toast.error(response.data.message);
        navigate("/user/signup");
        console.error("Failed to sign up:", response.data);
      }
    } catch (error) {
      toast.error("This emial is already used");
      // console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#C7C5F4] to-[#776BCC]">
      <div className="relative h-[600px] w-[360px] bg-gradient-to-r from-[#5D54A4] to-[#7C78B8] shadow-[0_0_24px_rgba(92,86,150,1)]">
        <div className="relative z-10 h-full">
          <form
            className=" flex flex-col  w-[320px] px-8 pt-28"
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <div className="flex items-center bg-white rounded-lg  py-1 my-4 border-2 px-2 border-blue-500">
              <i className="text-[#7875B5] fas fa-user" />
              <input
                type="text"
                className="w-3/4 pl-4 border-none border-b-2 border-[#D1D1D4] bg-white rounded-lg font-bold text-[#7875B5] placeholder-[#7875B5] transition duration-200 focus:outline-none focus:border-[#6A679E]"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center bg-white rounded-lg  py-1 my-4 border-2 px-2 border-blue-500">
              <i className="text-[#7875B5] fas fa-envelope" />
              <input
                type="email"
                className="w-3/4 pl-4 border-none border-b-2 border-[#D1D1D4] bg-white rounded-lg font-bold text-[#7875B5] placeholder-[#7875B5] transition duration-200 focus:outline-none focus:border-[#6A679E]"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center bg-white rounded-lg  py-1 my-4 border-2 px-2 border-blue-500">
              <i className="text-[#7875B5] fas fa-lock" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-3/4 pl-4 border-none border-b-2 border-[#D1D1D4]  font-bold text-[#7875B5] placeholder-[#7875B5] transition duration-200 focus:outline-none focus:border-[#6A679E]"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button
                type="button"
                className=" text-[#7875B5] focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword
                  ? <i className="fas fa-eye-slash" />
                  : <i className="fas fa-eye" />}
              </button>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="mt-8 py-4 px-5 rounded-[26px] border border-[#4740c5] uppercase font-bold flex items-center justify-between w-full text-[#4C489D] bg-white text-sm shadow-[0_2px_2px_rgba(92,86,150,1)] cursor-pointer transition duration-200 hover:border-[#6A679E]"
            >
              <span>Sign Up Now</span>
              <i className="fas fa-chevron-right text-[#7875B5] text-lg" />
            </button>

            <Link to="/user/login" className="pt-5 text-center text-white">
              All ready a member
            </Link>
          </form>
          <div className="absolute bottom-0 right-0 text-white text-center w-[160px] h-[140px]">
            <h3 className="text-sm">sign up via</h3>
            <div className="flex justify-center items-center mt-3">
              <a
                href="#"
                className="fab fa-instagram text-xl px-2 hover:scale-150 transition-transform"
              />
              <a
                href="#"
                className="fab fa-facebook text-xl px-2 hover:scale-150 transition-transform"
              />
              <a
                href="#"
                className="fab fa-twitter text-xl px-2 hover:scale-150 transition-transform"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Shape 1 */}
          <span
            className="absolute transform rotate-45 h-[520px] w-[520px] bg-white top-[-50px] right-[120px]"
            style={{
              borderTopRightRadius: "72px",
              borderBottomLeftRadius: "0",
              borderTopLeftRadius: "0",
              borderBottomRightRadius: "0"
            }}
          />
          {/* Shape 2 */}
          <span className="absolute transform rotate-45 h-[220px] w-[220px] bg-[#6C63AC] top-[-172px] right-0 rounded-[32px]" />
          {/* Shape 3 */}
          <span className="absolute transform rotate-45 h-[540px] w-[190px] bg-gradient-to-l from-[#5D54A4] to-[#6A679E] top-[-24px] right-0 rounded-[32px]" />
          {/* Shape 4 */}
          <span className="absolute transform rotate-45 h-[400px] w-[200px] bg-[#7E7BB9] top-[420px] right-[50px] rounded-[60px]" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
