import About from "./components/About";
import Blog from "./components/Blog";
import Cards from "./components/Cards";
import Depositions from "./components/Depositions";
import DownloadApp from "./components/DownloadApp";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Home from "./components/Home";
import Innovation from "./components/Innovation";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Innovation />
      <Depositions />
      <Cards />
      <DownloadApp />
      <Blog />
      <Faq />
    </>
  );
}

export default App;
