const About = () => {
  return (
    <>
      <section className="py-5 complete-section">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-md-5">
              <div className="ms-md-2 ms-lg-5">
                <img
                  className="img-fluid rounded-3 pic"
                  alt="Our Music App"
                  src="music-girl.jpg"
                />
              </div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="ms-md-2 ms-lg-5">
                <span className="text-muted">Our Story</span>
                <h2 className="display-5 fw-bold">About Us</h2>
                <p className="lead">
                  MUSIX is an online music streaming app, Who willing to provide
                  our users unlimited music with Ad-Free experience and It's
                  better for those peoples who loves music.
                </p>
                <p className="lead mb-0">
                  We are here to provide you better experience with outstanding
                  User - Interface and music with various features. If you like
                  to listen music a lot then this platform is for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
