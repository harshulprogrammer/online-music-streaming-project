import Song from "./Song";

const Songs = ({ fn, allsongs }) => {
  return (
    <>
      {allsongs.map((currentsong, index) => (
        <Song fn={fn} key={index} song={currentsong} />
      ))}
    </>
  );
};

export default Songs;
