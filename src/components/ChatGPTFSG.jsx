import { Link } from "react-router-dom";

const ChatGPTFsg = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {/* <h1 className="text-center my-4 mx-auto font-bold">Login to get alternative products personalized to your preferences</h1>
    <h1 className="text-center my-2 mx-auto font-bold">Coming Soon...</h1>
    <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800">
        <Link to="/login">Login</Link>
    </button> */}

      <section className="min-w-[100vw] min-h-[80vh] h-full flex justify-center items-center">
        <iframe
          src="https://app.writesonic.com/share/botsonic/2d1e54af-94b4-43b3-9c8e-3ee02d53e54e"
          height={800}     
        ></iframe>
      </section>
    </div>
  );
};

export default ChatGPTFsg;
