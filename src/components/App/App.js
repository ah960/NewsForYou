import "./App.css";
import { useState, useEffect } from "react";
import TopHeadlinesList from "../TopHeadlinesList";
import CategoryButton from "../categoryButton";
import Search from "../SearchBar";

const APIKEY = process.env.REACT_APP_ACCESS_KEY;

function App() {
  const [articles, setArticles] = useState();
  const [search, setSearch] = useState("");
  const [searchHeader, setSearchHeader] = useState();

  useEffect(() => {
    getArticle("?country=gb");
  }, []);

  async function getArticle(term) {
    let response =
      await fetch(`https://newsapi.org/v2/top-headlines/${term}&apiKey=${APIKEY}
	`);
    let data = await response.json();
    console.log(data);
    setArticles(data.articles);
    setSearchHeader(""); //removes searched search header once a category is clicked
  }

  async function getSearchedArticle(search) {
    setSearchHeader(`Showing articles related to ${search}`);
    console.log("button clicked, heres what was searched", search);
    let response =
      await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${APIKEY}
	`);

    let data = await response.json();
    console.log(data);
    setArticles(data.articles);
  }

  return articles ? (
    <main>
      <h1>News for you {searchHeader}</h1>
      <nav>
        <CategoryButton
          title={"Home"}
          onClick={() => {
            getArticle("?country=gb");
          }}
        />
        <CategoryButton
          title={"Sports"}
          onClick={() => {
            getArticle("?country=gb&category=sports");
          }}
        />

        <CategoryButton
          title={"Business"}
          onClick={() => {
            getArticle("?country=gb&category=business");
          }}
        />

        <CategoryButton
          title={"Technology"}
          onClick={() => {
            getArticle("?country=gb&category=technology");
          }}
        />

        <CategoryButton
          title={"Entertainment"}
          onClick={() => {
            getArticle("?country=gb&category=entertainment");
          }}
        />

        <CategoryButton
          title={"Health"}
          onClick={() => {
            getArticle("?country=gb&category=health");
          }}
        />

        <CategoryButton
          title={"Science"}
          onClick={() => {
            getArticle("?country=gb&category=science");
          }}
        />
        <Search
          onChange={(event) => setSearch(event.target.value)}
          onClick={() => {
            if (search) {
              //checks that search is truthy, stops site crashing when clicking search button without inputting a search
              getSearchedArticle(search);
            }
          }}
        />
      </nav>
      <TopHeadlinesList articles={articles} />
    </main>
  ) : (
    <></>
  );
}

export default App;