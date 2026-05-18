import { MainFooter, MainNav } from "./components/common";
import {
  Banner,
  BooksStatistics,
  FavoriteReads,
  FeaturedAuthor,
  FeaturedBooks,
  Info,
  ThaiFavoriteReads,
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
        <ThaiFavoriteReads />
        {/* falta: Opiniones, ShopByCategory, joinThecommunity*/}
        <BooksStatistics />
      </main>
      <MainFooter />
    </>
  );
}

export default App;
