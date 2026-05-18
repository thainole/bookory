export interface Book {
  title: string;
  author: string;
  image: string;
  totalOpinions: number;
  price: string;
}

export interface BookService extends Book {
  id: number;
  genre: string;
  publication_year: string;
  total_reviews: number;
}
