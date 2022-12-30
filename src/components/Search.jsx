export default function Search({ handleSearch }) {
  return (
    <header className=" shadow-xl lg:max-w-2xl mx-auto container bg-white mt-20 md:mb-20">
      <form>
        <label htmlFor="search">Search Your Favorite Cocktail</label>
        <input className=" px-3" type="text" onChange={handleSearch} id="search" />
      </form>
    </header>
  );
}
