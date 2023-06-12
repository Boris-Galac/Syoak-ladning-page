import "./css/style.css";
import Header from "./components/Header";
import Point from "./components/Point";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container grid-center">
          <section className="hero-section">
            <div className="hero__focal-point d-grid">
              <h1 className="hero__headline">
                Our bussines takes the industry of oil & gass to a new level.
              </h1>
              <p className="hero__subheadline">
                We have a long and proud history givin emphasis to environment
                social and economic outcomes to deliver places that respond
              </p>
              <button className="cta-btn" aria-label="call to action button">
                <img src="./assets/icons/arrow-icon.svg" aria-hidden="true" />
                Learn more
              </button>
            </div>
            <div className="hero__point-tracker d-flex">
              <Point class="point__focal" label="Extraction" />
              <Point />
              <Point />
              <Point />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
