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
            <h1 className="title-gradient text-3xl md:text-4xl font-bold">
              Rest Assured, It’s Secured
            </h1>
            <p className="text-lg md:text-xl  text-[#AFAFAF]">
              Cybersecurity is in our DNA. Prioritising security from the first
              line of code is what we do. Ensuring you and your data are safe
              with Xcidic!
            </p>
            <a
              href="#"
              className="text-white font-bold flex justify-center items-center gap-1 z-10 text-sm "
            >
              Learn our cybersecurity service <Arrow />
            </a>
          </div>
          <div className="relative w-[50%] mx-auto ">
            <img src="/images/shield.png" className="w-full h-auto" />
            <div className="absolute left-[-15%] top-[10%]">
              <Button
                label="Hive Dashboard"
                icon={<GridFour />}
                link="https://hunter.xcidic.com:64297/kibana"
              />
            </div>
            <div className="absolute left-[-15%] bottom-[15%]">
              <Button
                label="Attack Map"
                icon={<MapIcon />}
                link="https://hunter.xcidic.com:64297/map"
              />
            </div>
            <div className="absolute right-[-15%] top-[10%]">
              <Button
                label="System Monitor"
                icon={<ViewBoard />}
                link="https://hunter.xcidic.com:64297/cockpit.html"
              />
            </div>
            <div className="absolute right-[-15%] bottom-[15%]">
              <Button
                label="Analysis Tool"
                icon={<LineUp />}
                link="https://hunter.xcidic.com:64297/cyberchef"
              />
            </div>

            <div className="absolute bottom-[=10%] left-[50%] translate-y-[-50%] translate-x-[-50%] ">
              <Button
                label="Scan Tool"
                icon={<Scan />}
                link="https://hunter.xcidic.com:64297/spiderfoot"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
