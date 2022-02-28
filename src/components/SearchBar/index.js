import "./index.css";
export function Search({ onChange, onClick }) {
  return (
    <div id="search">
      <input
        onChange={onChange}
        id="input"
        placeholder="Search for articles"
      ></input>
      <button onClick={onClick}>Search</button>
    </div>
  );
}

export default Search;
