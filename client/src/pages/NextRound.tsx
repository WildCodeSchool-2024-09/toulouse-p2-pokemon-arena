import { useNavigate } from "react-router-dom";
import "../styles/NextRound.css";
import { useBattle } from "../contexts/BattleProvider";

export default function NextRound() {
  const navigate = useNavigate();
  const { round, matchWinner, setRandomPokemon, setRound, setMatchWinner } =
    useBattle();
  const handdleClickNextRound = () => {
    const array1 = matchWinner.filter((_, index) => index % 2 === 0);
    const array2 = matchWinner.filter((_, index) => index % 2 !== 0);
    setRandomPokemon([array1, array2]);
    setMatchWinner([]);
    setRound((prev) => prev - 1);
    navigate(`/battle/${round}/1`);
  };
  return (
    <div className="next-round-container">
      <button
        type="button"
        className="next-round-button"
        onClick={handdleClickNextRound}
      >
        Next Round
      </button>
    </div>
  );
}
