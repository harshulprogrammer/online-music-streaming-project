const Song = ({ fn, song }) => {
  const showPlayer = () => {
    fn(true, song);
  };
  return (
    <>
      <div className="one-song">
        <div>
          <img
            className="song-image"
            alt="music pic"
            src={song.artworkUrl100}
          />
        </div>
        <div className="music-name">
          <br />
          <b>{song.trackName}</b> - {song.artistName}
        </div>
        <div>
          <br />
          <button className="btn btn-dark play-btn" onClick={showPlayer}>
            Play Song
          </button>
        </div>
      </div>
    </>
  );
};

export default Song;
