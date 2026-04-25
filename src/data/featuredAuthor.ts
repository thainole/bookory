import book1 from "../assets/images/books/los-enamoramientos.jpg";
import book2 from "../assets/images/books/corazon-tan-blanco.jpg";
import book3 from "../assets/images/books/mañana-en-la-batalla-piensa-en-mi.jpg";
import book4 from "../assets/images/books/berta-isla.jpg";
import author from "../assets/images/javier-marias.jpg";

export const featuredAuthor = {
  name: "Javier Marías",
  image: author,
  description:
    "Javier Marías fue uno de los escritores españoles más influyentes de la literatura contemporánea. Su obra destaca por su estilo introspectivo, sus narradores reflexivos y su exploración de temas como la memoria, el amor, el secreto y la traición. Sus novelas han sido traducidas a decenas de idiomas y han recibido reconocimiento internacional.\n\nA lo largo de su trayectoria, desarrolló una voz única caracterizada por frases extensas, digresiones profundas y una constante indagación en la condición humana. Además de novelista, fue traductor y ensayista, lo que enriqueció aún más su estilo literario. Obras como Corazón tan blanco y Los enamoramientos lo consolidaron como una figura clave de la narrativa en lengua española.",
  books: [
    {
      id: 1,
      title: "Los enamoramientos",
      image: book1,
      price: "65.50",
      totalOpinions: 9,
      author: "Javier Marías",
    },
    {
      id: 2,
      title: "Corazón tan blanco",
      image: book2,
      price: "49.50",
      totalOpinions: 4,
      author: "Javier Marías",
    },
    {
      id: 3,
      title: "Mañana en la batalla piensa en mí",
      image: book3,
      price: "55.50",
      totalOpinions: 3,
      author: "Javier Marías",
    },
    {
      id: 4,
      title: "Berta Isla",
      image: book4,
      price: "49.90",
      totalOpinions: 4,
      author: "Javier Marías",
    },
  ],
};
