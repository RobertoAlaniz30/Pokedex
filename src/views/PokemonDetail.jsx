import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PokemonDetail = () => {
  const { id } = useParams();

  const detail = useSelector((state) => state.pokemonsList);

  return (
    <div className="container">
      <div>
        <div className="back-button">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
        <article className="pokemon-detail">
          <div className="img-container">
            <img src={detail[id - 1].sprites.front_default} alt="" />
          </div>
          <article className="data-pokemon">
            <h3>
              Name: <span>{detail[id - 1].name}</span>
            </h3>
            <h3>
              Base Experience: <span>{detail[id - 1].base_experience}</span>
            </h3>
            <h3>
              Height: <span>{detail[id - 1].height}</span>
            </h3>
            <h3>
              Weight: <span>{detail[id - 1].weight}</span>
            </h3>
          </article>
        </article>
      </div>

      <footer className="footer-pokemon">
        <img
          src="https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png"
          alt=" "
        />
      </footer>
    </div>
  );
};

export default PokemonDetail;
