import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#c8e8e9]">
      <div className="container w-85 bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center">
          <div className="left-side w-1/4 flex flex-col items-center justify-center relative">
            <div className="details text-center my-4">
              <i className="fas fa-map-marker-alt text-2xl text-[#3e2093] mb-2" />
              <div className="topic font-semibold">Address</div>
              <div className="text-one">1155 Union Circle,</div>
              <div className="text-two">Denton, Tx 76203</div>
            </div>
            <div className="details text-center my-4">
              <i className="fas fa-phone-alt text-2xl text-[#3e2093] mb-2" />
              <div className="topic font-semibold">Phone</div>
              <div className="text-one">(945) 265 0533</div>
              <div className="text-two">(425) 553 5002</div>
            </div>
            <div className="details text-center my-4">
              <i className="fas fa-envelope text-2xl text-[#3e2093] mb-2" />
              <div className="topic font-semibold">Email</div>
              <div className="text-one">neerajreddyaluka@my.unt.edu</div>
              <div className="text-two">SreeKohaliPatel@my.unt.edu</div>
            </div>
            <div className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 h-[70%] w-[2px] bg-[#afafb6]" />
          </div>
          <div className="right-side w-3/4 ml-6">
            <div className="topic-text text-2xl font-semibold text-[#3e2093] mb-4">
              Send us a message
            </div>
            <p className="mb-4">
              If you have any work from me or any types of queries related to my
              tutorial, you can send me a message from here. It's my pleasure to
              help you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-box mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full h-12 border-none bg-[#F0F1F8] rounded-md p-4 outline-none"
                  required
                />
              </div>
              <div className="input-box mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full h-12 border-none bg-[#F0F1F8] rounded-md p-4 outline-none"
                  required
                />
              </div>
              <div className="input-box mb-4">
                <textarea
                  placeholder="Enter your message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full h-[110px] border-none bg-[#F0F1F8] rounded-md p-4 outline-none"
                  required
                />
              </div>
              <div className="button mb-4">
                <input
                  type="submit"
                  value="Send Now"
                  className="w-full bg-[#3e2093] text-white font-semibold rounded-md py-2 transition-all duration-300 hover:bg-[#5029bc] cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
