import { Link } from "react-router-dom";

const LoginSection = () => {
  return (
    <section className="shadow-md flex md:flex-row flex-col max-w-[100vw] w-full justify-center items-center gap-2 p-2 bg-gray-100">
      <h1 className="text-center">
        Get Personalized recommendations when you login:
      </h1>
      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800">
        <Link to="/login">Login</Link>
      </button>
    </section>
  );
};

export default LoginSection;
