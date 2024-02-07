const Song = ({ fn, song }) => {
  const showPlayer = () => {
    fn(true, song);
  };
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img alt="music pic" src={song.artworkUrl100} />
        </div>
        <div className="col-4">
          {song.artistName} {song.trackName}
        </div>
        <div className="col-4">
          <button className="btn btn-primary" onClick={showPlayer}>
            Play Song
          </button>
        </div>
      </div>
    </>
  );
};

export default Song;
