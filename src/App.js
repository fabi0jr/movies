import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Container from "./components/Container";
import videos from "./json/db.json";
import Category from "./components/Category";

const categories = [
    "Ação",
    "Aventura",
    "Comédia",
    "Drama",
    "Ficção Científica",
    "Terror",
    "Romance",
    "Animação",
    "Documentário",
    "Fantasia",
    "Mistério",
]

function filterCategory(id){
  return videos.filter( video => video.category === categories[id])
}

function App() {
  return (
    <>
    <Header />
    <Banner image = "home"/>
    <Container>

      <Category category={"Ação"}>
        {filterCategory(0).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

      <Category category={"Aventura"}>
        {filterCategory(1).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

      <Category category={"Comédia"}>
        {filterCategory(2).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

      <Category category={"Drama"}>
        {filterCategory(3).map((video) => <Card id={video.id} key={video.id} />)}
      </Category>

    </Container>
    <Footer />
    </>
  );
}

export default App;
 