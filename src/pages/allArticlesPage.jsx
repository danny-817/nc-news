import UserButton from "../components/userbutton";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import Body from "../components/body";
import { useState } from "react";

const AllArticles = () => {
  const [filterBy, setFilterBy] = useState("Date");
  return (
    <>
      <UserButton />
      <Header />
      <main>
        <SearchBar setFilterBy={setFilterBy} filterBy={filterBy} />
        <Body filterBy={filterBy} />
      </main>
    </>
  );
};

export default AllArticles;
