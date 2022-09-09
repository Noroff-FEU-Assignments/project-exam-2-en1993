import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import HomePost from "./HomePost";


const HomePage = () => {
  return (
    <>
      <main>
        <Heading content=" This is Home Page" />
        <section className="welcome-section">
          <div className="slider-wrapper">
            <HomePost />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
