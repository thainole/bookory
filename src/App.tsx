import { MainFooter, MainNav } from "./components/common";
import {
  Banner,
  BooksStatistics,
  FavoriteReads,
  FeaturedAuthor,
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
        <FeaturedAuthor />
        <FavoriteReads />
        {/* falta: Opiniones, ShopByCategory, joinThecommunity*/}
        <BooksStatistics />
      </main>
      <MainFooter />
    </>
  );
}

export default App;
