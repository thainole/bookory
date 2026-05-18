import {
  Banner,
  BooksStatistics,
  FavoriteReads,
  FeaturedAuthor,
  FeaturedBooks,
  Info,
  ThaiFavoriteReads,
} from "./components";

const index = () => {
  return (
    <>
      <Banner />
      <Info />
      <FeaturedBooks />
      <FeaturedAuthor />
      <FavoriteReads />
      <ThaiFavoriteReads />
      <BooksStatistics />
    </>
  );
};

export default index;
