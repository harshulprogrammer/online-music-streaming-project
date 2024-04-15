import { useEffect, useState } from "react";
import Search from "../components/Search";
import Songs from "../components/Songs";
import getSongs from "../services/api-client";
import Player from "../components/Player";
import Statistics from "../components/Statistics";

const SearchPage = () => {
  const [AllSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song, setPlayerSong] = useState(null);

  const defaultSongs = async () => {
    const newSongs = await getSongs("Animal");
    setSongs(newSongs);
  };
  useEffect(() => {
    defaultSongs();
  }, []);

  const toggelPlayer = (flag, songarg) => {
    setPlayerSong(songarg);
    setFlag(flag);
  };

  const singName = async (naming) => {
    console.log(naming);
    const songs = await getSongs(naming); // Fetch songs from API
    setSongs(songs); // Update state with fetched songs
    console.log(songs); // Log fetched songs
  };

  const jsx = (
    <>
      <div className="main-home">
        <div>
          <Search fn={singName} />
          <Songs fn={toggelPlayer} allsongs={AllSongs} />
        </div>
        <div>
          <Statistics />
        </div>
      </div>
    </>
  );

  return <>{flag ? <Player fn={toggelPlayer} song={song} /> : jsx}</>;
};

export default SearchPage;
