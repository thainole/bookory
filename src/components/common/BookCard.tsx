const BookCard = () => {
  return (
    <div className="group">
      <div className="bg-white rounded-xl overflow-hidden mb-3">
        {/* <img src="/book.jpg" className="w-full group-hover:scale-105 transition" /> */}
      </div>

      <h3 className="font-semibold">Book Title</h3>
      <p className="text-lighter text-sm">Author</p>

      <div className="text-sm text-yellow-500">★★★★★</div>

      <p className="text-primary font-semibold mt-1">$120.00</p>
    </div>
  );
};

export default BookCard;
