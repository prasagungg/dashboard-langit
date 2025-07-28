import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

function Login() {
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah browser melakukan reload

    console.log("Data yang dikirim:", data);

    // Opsional: Mereset form setelah submit
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className=" bg-gray-500 rounded-md  backdrop-blur-sm bg-opacity-10 badge p-8 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Welcome to Langit</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="email"
          className="w-full h-full text-black text-sm px-3 py-2.5 border-2 rounded-lg focus:outline-none"
          placeholder="Your Email"
          required
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="w-full h-full text-black text-sm px-3 py-2.5 border-2 rounded-lg focus:outline-none"
          placeholder="Your Password"
          required
          name="password"
          value={data.password}
          onChange={handleChange}
        />

        <button className="bg-gradient-to-r from-[#4438ec] to-[#f6313a] hover:from-[#5c49f3] hover:to-[#f85c63] text-white font-bold py-3 px-5 rounded-md inline-flex items-center justify-center gap-1 md:gap-3 text-xs transition-all duration-300">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
