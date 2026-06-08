import { Outlet, useLocation } from "react-router-dom";
import { MainFooter, MainNav } from "./shared/components";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <MainNav />
      <main className="animate-in fade-in duration-500">
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
}

export default App;
