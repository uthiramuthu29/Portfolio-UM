function BookCards({ bookimg }) {
  return (
    <div className="bookcards">
      <img className="w-full h-[260px] lg:h-[360px]" src={bookimg} alt="" />
    </div>
  );
}

export default function BookSection({ title, books }) {
  return (
    <section className="book-section mb-[80px] [&:last-of-type]:mb-[52px] ">
      <h2 className="text-[32px] lg:text-[48px] text-[#C5C5C5] dark:text-[#808080] font-bold mb-[32px] ">{title}</h2>
      <div className="grid grid-cols-2 gap-[18px] lg:grid-cols-4 lg:gap-[25px] ">
        {books.map((book, index) => {
          return <BookCards key={index} bookimg={book} />
        })}
        
      </div>
    </section>
  );
}
