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

      {/* hero */}
      <Dashbord />

      {/* footer */}
      <Footer />
    </article>
  );
}
