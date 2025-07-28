import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Background, Footer, Navbar } from "../components";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-[url('/images/background.png')] bg-no-repeat bg-left-top bg-cover relative h-screen w-full">
        <Background />
        <div className="py-2 lg:py-6 max-w-4xl mx-10 lg:mx-auto flex flex-col justify-between h-full">
          <Navbar />
          <div className="my-0 lg:my-6 text-center mb-12 lg:mb-0">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
