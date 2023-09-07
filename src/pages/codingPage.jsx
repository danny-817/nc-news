import UserButton from "../components/userbutton";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import FilteredArticles from "../components/filtered_articles";

const CodingArticles = () => {
  return (
    <>
      <UserButton />
      <Header />
      <main>
        <SearchBar />
        <FilteredArticles />
      </main>
    </>
  );
};

export default CodingArticles;
