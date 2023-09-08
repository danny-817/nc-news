import UserButton from "../components/userbutton";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import Body from "../components/body";
import { useState } from "react";

const AllArticles = () => {
  const [sortBy, setSortBy] = useState("Date");
  return (
    <>
      <UserButton />
      <Header />
      <main>
        <SearchBar setSortBy={setSortBy} sortBy={sortBy} />
        <Body sortBy={sortBy} />
      </main>
    </>
  );
};

export default AllArticles;
