import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import "/src/styles/PokedexDetails.css";
import { useEffect, useState } from "react";
import cryIcon from "/src/assets/images/cry.png";
import returnArrow from "/src/assets/images/left-arrow.png";
import { getPokemonTypesTranslation } from "../services/getApi";
import type { Data } from "../types/type";

export default function PokedexDetails() {
  const navigate = useNavigate();
  const [isShiny, setIsShiny] = useState(false);
  const [typeNames, setTypeNames] = useState<string[]>([]);
  const data = useRouteLoaderData("data") as Data[];
  const { id } = useParams();
  const pokemon = data.find((element) => element.id === Number(id));
  const {
    name,
    img,
    imgShiny,
    type,
    description,
    category,
    height,
    weight,
    cry,
  } = pokemon || {
    height: 0,
    weight: 0,
  };

  const convertID = (id: string | undefined) => {
    if (Number(id) < 10) {
      return `00${id}`;
    }
    if (Number(id) < 100) {
      return `0${id}`;
    }
    return id;
  };

  const handleClickPlayCry = () => {
    const audio = new Audio(cry);
    audio.play();
  };

  const handleClickTurnShiny = () => {
    setIsShiny(!isShiny);
  };

  const handleClickBackToList = () => {
    navigate("/pokedex");
  };

  useEffect(() => {
    const getTypes = async () => {
      if (type) {
        const translatedTypes = [];
        for (const url of type) {
          const translatedType = await getPokemonTypesTranslation(url, "fr");
          translatedTypes.push(translatedType);
        }
        setTypeNames(translatedTypes);
      }
    };
    getTypes();
  }, [type]);

  return (
    <div className="details-page-container">
      <div className="details-container">
        <div className="pokedex-detail-header">
          <img
            onKeyDown={handleClickBackToList}
            onClick={handleClickBackToList}
            className="return-arrow-icon"
            src={returnArrow}
            alt="Fléche de retour en arrière"
          />
          <h1 className="details-title">Pokédex</h1>
        </div>
        <ul className="details-name-container">
          <li className="details-pokemon-name">{name}</li>
          <li className="details-pokemon-id">
            <i>Pokedex ID : {convertID(id)}</i>
          </li>
        </ul>
        <ul className="details-species-container">
          <li className="details-category">
            <b className="bold-text">Catégorie</b> : {category}
          </li>
          <li className="details-type">
            <b className="bold-text">Type</b> : {typeNames?.join(" / ")}
          </li>
        </ul>
        <img
          onKeyDown={handleClickTurnShiny}
          onClick={handleClickTurnShiny}
          className="details-pokemon-photo"
          src={isShiny ? imgShiny : img}
          alt="Pokémon"
        />
      </div>
      <div className="details-description-container">
        <div className="image-shadow"> </div>
        <p className="details-description">
          <b className="bold-text">Description</b> : {description}
        </p>
        <div className="details-body-container">
          <div className="height-weight-container">
            <p className="details-height">
              <b className="bold-text">Taille</b> : {height} m
            </p>
            <p className="details-weight">
              <b className="bold-text">Poids</b> : {weight} Kg
            </p>
          </div>

          <img
            onKeyDown={handleClickPlayCry}
            onClick={handleClickPlayCry}
            className="cry-icon"
            src={cryIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
