import UserButton from "../components/userbutton";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import SingleArticle from "../components/singleArticle";

const SingleArticlePage = () => {
  return (
    <>
      <UserButton />
      <Header />
      <main>
        <SearchBar />
        <SingleArticle />
      </main>
    </>
  );
};

export default SingleArticlePage;
