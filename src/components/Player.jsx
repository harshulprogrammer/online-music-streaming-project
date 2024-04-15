const Player = ({ song, fn }) => {
  return (
    <>
      <div className="music-player">
        <button
          onClick={() => {
            fn(false, null);
          }}
          className="btn btn-dark"
        >
          Back to Songs
        </button>
        <br />
        <br />
        <div className="music-play">
          <p className="music-play-heading">
            <b>Now Playing</b>
          </p>
          <img alt="music pic" className="music-pic" src={song.artworkUrl100} />
          <p className="track-name">
            <b>{song.trackName}</b> - {song.artistName}
          </p>
          <audio controls>
            <source src={song?.previewUrl} type="audio/mp4" />
          </audio>
        </div>
      </div>
    </>
  );
};

export default Player;
