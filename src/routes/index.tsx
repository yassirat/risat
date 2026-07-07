import { createFileRoute } from "@tanstack/react-router";

import Dashbord from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/")({
  component: HomeRoute,
});

function HomeRoute() {
  document.title = "risat";

  return (
    <article className="grid min-h-dvh w-full grid-rows-[1fr_auto]">
      <Navbar />

      <div className="relative grid w-full place-content-center bg-light bg-dot-black/[0.3] dark:bg-zinc-950 dark:bg-dot-white/[0.25]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-zinc-950"></div>

        {/* hero */}
        <Dashbord />
      </div>

      {/* footer */}
      <Footer />
    </article>
  );
}
