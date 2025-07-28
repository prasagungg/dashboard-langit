import { Link } from "@tanstack/react-router";
import { Arrow } from "./icons";

function App() {
  return (
    <>
      <div className="grid gap-1 lg:gap-4 w-full lg:w-5/6 mx-auto">
        <h3 className="text-green-400 animate-ping text-base md:text-xl font-bold">
          Online
        </h3>
        <h1 className="title-gradient text-xl md:text-4xl font-bold">
          Langit From Uncle to Everyone
        </h1>

        <p className="text-base md:text-xl  text-[#AFAFAF]">
          Experience the internet without boundaries, with Langit. We believe in
          an open and accessible web for everyone, everywhere. With Langit, you
          get the world of unrestricted online possibilities.
        </p>

        <Link
          to="/login"
          className="text-white font-bold flex justify-center items-center gap-1 z-10 text-sm "
        >
          Login to Dashboard <Arrow />
        </Link>
      </div>
      <div className="relative md:w-[50%] mx-auto ">
        <img src="/images/shield.png" className="w-full h-auto" />
      </div>
    </>
  );
}

export default App;
