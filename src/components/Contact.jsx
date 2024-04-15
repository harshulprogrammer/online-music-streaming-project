const Contact = () => {
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
                  src="music-boy.jpg"
                />
              </div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="ms-md-2 ms-lg-5">
                <span className="text-muted">Reach Us</span>
                <h2 className="display-5 fw-bold">Contact Us</h2>
                <p className="lead">
                  Our Company loves our users, If you want to reach us then, We
                  provided all the contact options below. You can also reach us
                  through e-mail.
                </p>
                <p className="lead mb-0">
                  We will availabile to help you as soon as possible and solve
                  your issue much faster with our dedicated support team.
                </p>
                <p className="lead mb-0 pt-1">
                  <b>Our Toll-Free Number: +91</b>
                  <i>-81xxxxxx90</i>
                </p>
                <p className="lead mb-0 pt-1">
                  <b>Mail Us: </b>
                  <i>musixxxxxxx@musixxxxx.com</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
