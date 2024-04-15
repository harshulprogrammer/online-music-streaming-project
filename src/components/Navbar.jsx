import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-design fixed-top nav-look">
        <div className="container-fluid">
          <img src="logo.png" alt="musix logo" className="musix-logo" />
          <NavLink
            className="nav-options nav-link active"
            to="/online-music-streaming-project"
          >
            <h3 className="brand-name">MUSIX</h3>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-options nav-link"
                  aria-current="page"
                  to="/online-music-streaming-project"
                >
                  <span className="nav-button">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-options nav-link"
                  to="/online-music-streaming-project/search-term"
                >
                  <span className="nav-button">Top Search Terms</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-options nav-link"
                  to="/online-music-streaming-project/about"
                >
                  <span className="nav-button">About Us</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-options nav-link"
                  to="/online-music-streaming-project/contact"
                >
                  <span className="nav-button">Contact Us</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
