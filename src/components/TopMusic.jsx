import SearchTerm from "./SearchTerm";
import arr from "../services/data-client";

const TopMusic = () => {
  return (
    <>
      <div className="top-music-india">
        <h1 className="top-music-list">Top Highly Searched Songs in India</h1>
        {arr.map((currElm) => {
          return (
            <SearchTerm
              key={currElm.id}
              numbers={currElm.number}
              musicsong={currElm.music}
            />
          );
        })}
      </div>
    </>
  );
};

export default TopMusic;
