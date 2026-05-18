import { Outlet } from "react-router-dom";
import { MainFooter, MainNav } from "./common";

function App() {
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
