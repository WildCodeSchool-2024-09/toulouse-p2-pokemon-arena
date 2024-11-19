import CustomizedSlider from "../components/CustomizedSlider";
import "../styles/BattleSettings.css";
import { useNavigate } from "react-router-dom";
import monImage from "../assets/images/button-play-pokeball.png";

export default function BattleSettings() {
  const navigate = useNavigate();
  const handleClickBattle = () => {
    navigate("/battle");
  };

  return (
    <div id="battle-settings-page">
      <header id="battle-settings-header">
        <h1 id="battle-settings-title">Battle</h1>
        <p id="battle-settings-text">
          <span>Prêt à découvrir quel Pokémon est vraiment ton préféré ?</span>
          <br />
          Dans cette Battle, crée ton propre tournoi en opposant des Pokémon
          aléatoires en face-à-face ! À chaque tour, deux Pokémon s'affrontent,
          et c'est toi qui choisis celui qui continuera l'aventure jusqu'à la
          finale.
          <br />
          <br />
          Avant de lancer la bataille, ajuste les paramètres pour créer le
          tournoi parfait : choisis le nombre de participants (8, 16, 32 ou 64)
          et filtre-les par type ou par génération. Que tu aies un faible pour
          les Pokémon de Kanto, ceux de Sinnoh, ou que tu préfères les types Feu
          ou Eau, cette Battle s’adapte à toutes tes préférences. À toi de
          jouer, et que le meilleur Pokémon l'emporte !
        </p>
      </header>
      <div id="settings-section">
        <div id="settings-ajustments">
          <button className="battle-filters-button" type="button">
            Filtres
          </button>
          <CustomizedSlider />
        </div>
        <button
          onClick={handleClickBattle}
          className="go-to-button"
          type="button"
        >
          Play ! <img className="img-button" src={monImage} alt="Pokéball" />
        </button>
      </div>
    </div>
  );
}
