import UserButton from "../components/userbutton";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import Body from "../components/body";

const AllArticles = () => {
  return (
    <>
      <UserButton />
      <Header />
      <main>
        <SearchBar />
        <Body />
      </main>
    </>
  );
};

export default AllArticles;
