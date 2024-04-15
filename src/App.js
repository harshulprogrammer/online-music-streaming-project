import About from "./components/About";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import TopMusic from "./components/TopMusic";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/online-music-streaming-project"
            element={<SearchPage />}
          />
          <Route
            path="/online-music-streaming-project/about"
            element={<About />}
          />
          <Route
            path="/online-music-streaming-project/contact"
            element={<Contact />}
          />
          <Route
            path="/online-music-streaming-project/search-term"
            element={<TopMusic />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
