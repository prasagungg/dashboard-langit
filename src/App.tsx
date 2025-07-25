import { Background, Button, Footer, Navbar } from "./components";
import { Arrow, GridFour, LineUp, MapIcon, Scan, ViewBoard } from "./icons";

function App() {
  return (
    <div className="bg-[url('/images/background.png')] bg-no-repeat bg-left-top bg-cover relative h-screen w-full">
      <Background />
      <div className="py-2 lg:py-6 max-w-4xl mx-10 lg:mx-auto flex flex-col justify-between h-full">
        <Navbar />
        <div className="my-0 lg:my-6 text-center mb-12 lg:mb-0">
          <div className="grid gap-1 lg:gap-4 w-full lg:w-5/6 mx-auto">
            <h3 className="text-green-400 animate-ping text-base md:text-xl font-bold">
              Online
            </h3>
            <h1 className="title-gradient text-xl md:text-4xl font-bold">
              Langit From Putra to Everyone
            </h1>

            <p className="text-base md:text-xl  text-[#AFAFAF]">
              Experience the internet without boundaries, with Langit. We
              believe in an open and accessible web for everyone, everywhere.
              With Langit, you get the world of unrestricted online
              possibilities.
            </p>
            <a
              href="https://www.linkedin.com/in/adi-syahdilla"
              target="_blank"
              className="text-white font-bold flex justify-center items-center gap-1 z-10 text-sm "
            >
              Login to Dashboard <Arrow />
            </a>
          </div>
          <div className="relative md:w-[50%] mx-auto ">
            <img src="/images/shield.png" className="w-full h-auto" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
