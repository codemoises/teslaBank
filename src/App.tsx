import About from "./components/About";
import Cards from "./components/Cards";
import Depositions from "./components/Depositions";
import DownloadApp from "./components/DownloadApp";
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
    </>
  );
}

export default App;
