const Player = ({ song, fn }) => {
  return (
    <>
      <button
        onClick={() => {
          fn(false, null);
        }}
        className="btn btn-success"
      >
        Back to Songs
      </button>
      <br />
      <br />
      <img alt="music pic" src={song.artworkUrl100} />
      <p>
        {song.artistName} {song.trackName}
      </p>
      <audio controls>
        <source src={song?.previewUrl} type="audio/mp4" />
      </audio>
    </>
  );
};

export default Player;
