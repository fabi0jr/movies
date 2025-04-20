import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Container from "./components/Container";
import videos from "./json/db.json";



function App() {
  return (
    <>
    <Header />
    <Banner image = "home"/>
    <Container>
      <h1>Trailers</h1>
      <section className="cards">
        {
          videos.map((video) => {
            return (
              <Card id={video.id} key={video.id}/>
            )
          })
        }
      </section>
    </Container>
    <Footer />
    </>
  );
}

export default App;
 