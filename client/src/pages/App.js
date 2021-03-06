import collection from "../assets/collection.jpg";
import platform from "../assets/platform.jpg";
import question from "../assets/question-mark.jpg";
import hourglass from "../assets/hourglass.jpg";
import video from "../assets/hero-video.mp4";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <div className="video-container">
        <div className="overlay"></div>
        <div className="video-content">
          <h1>Welcome to The GameDB</h1>
          <p>Where the game is never over</p>
        </div>
        <video autoPlay loop muted id="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <div className="layout">
          <div className="split-column">
            <p>
              Here at The GameDB, our goal is to introduce to games you haven't
              played before. Whether it's browsing through our extensive museum
              of gaming history and finding something that catches your eye or
              choosing to play our featured game of the month. Each month, our
              users will vote for next month's game of the month! Create an
              account to participate in the voting process.
            </p>
          </div>
          <div className="game-of-the-month">
            <h2>Check out the game of the month</h2>
            <a href="/gameofthemonth">
              <img src={question} alt="game of the month" />
            </a>
          </div>
          <div className="browse">
            <h2>Browse the Collection</h2>
            <div className="sort-by">
            <Link to="/games">
                <h4>Games</h4>
                <img src={collection} alt="collection" />
                <div className="overlay overlay-border-radius"></div>
              </Link>
              <Link to="/platforms">
                <h4>Platforms</h4>
                <img src={platform} alt="platform" />
              </Link>
              <Link to="/decades">
                <h4>Decade </h4>
                <img src={hourglass} alt="collection" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
