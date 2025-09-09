import Banner from "../components/Banner";
import BookSection from "../components/BookSection";

import { harryPotterBookData, nonFictionBookData, ponniyinSelvanBookData, sivagamiyinSabadhamBookData } from "../internal-data/BookShelfData";

export default function BookShelf() {
  return (
    <div className="bookshelf">
      <main>
        <Banner title="Bookshelf" para="Books and pieces of wisdom I’ve enjoyed reading." />
        <BookSection title="Harry Potter" books={harryPotterBookData} />
        <BookSection title="Ponniyin Selvan" books={ponniyinSelvanBookData} />
        <BookSection title="Sivagamiyin Sabadham" books={sivagamiyinSabadhamBookData} />
        <BookSection title="Non-Fiction" books={nonFictionBookData} />
      </main>
    </div>
  );
}
