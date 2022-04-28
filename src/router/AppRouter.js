import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../views/Home";
import PokemonDetail from "../views/PokemonDetail";
import About from "../views/About";
import Error from "../views/Error";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/*" component={<Error />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
