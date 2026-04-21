import { MainFooter, MainNav } from "./components/common";
import {
  Banner,
  BooksStatistics,
  FeaturedBooks,
  Info,
} from "./components/home";

function App() {
  return (
    <>
      <MainNav />
      <main>
        <Banner />
        <Info />
        <FeaturedBooks />
        <BooksStatistics />
      </main>
      <MainFooter />
    </>
  );
}

export default App;
