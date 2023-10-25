import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

const linksArray = [
  { to: "/sonam_portfolio/about", label: "About Me" },
  { to: "/sonam_portfolio/portfolio", label: "Portfolio" },
  { to: "/sonam_portfolio/contact", label: "Contact" },
  { to: "/sonam_portfolio/resume", label: "Resume" },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header links={linksArray} />
        <div className="container mt-5">
          <Routes>
            <Route path="/sonam_portfolio/" element={<About />} />
            <Route path="/sonam_portfolio/about" element={<About />} />
            <Route path="/sonam_portfolio/portfolio" element={<Portfolio />}/>
            <Route path="/sonam_portfolio/contact" element={<Contact />} />
            <Route path="/sonam_portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
