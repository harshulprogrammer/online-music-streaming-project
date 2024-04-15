const Statistics = () => {
  return (
    <>
      <div className="progress-bar">
        <h3 className="top-music">Top 5 Music Search Terms</h3>
        <span className="progress-word">
          Pasoori - <b>88%</b>
        </span>
        <progress value={88} max={100} />
        <span className="progress-word">
          Kesariya - <b>75%</b>
        </span>
        <progress value={75} max={100} />
        <span className="progress-word">
          Believer - <b>68%</b>
        </span>
        <progress value={68} max={100} />
        <span className="progress-word">
          Maan Meri Jaan - <b>64%</b>
        </span>
        <progress value={64} max={100} />
        <span className="progress-word">
          Raataan Lambiyan - <b>55%</b>
        </span>
        <progress value={55} max={100} />
      </div>
    </>
  );
};

export default Statistics;
