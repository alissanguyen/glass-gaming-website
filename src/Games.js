import * as React from "react";
import DeathStrandingIcon from "./assets/death-stranding.png";
import GhostRunnerIcon from "./assets/ghostrunner.png";
import HadesIcon from "./assets/hades.png";
import HaloIcon from "./assets/halo-infinite.png";
import PsyIcon from "./assets/psychonauts2.png";
import WitcherIcon from "./assets/witcher3.png";

const Games = () => {
  const [input, setInput] = React.useState("");
  const games = [
    {
      name: "Death Stranding",
      icon: DeathStrandingIcon,
      price: "FREE with Pro",
    },
    {
      name: "The Witcher 3",
      icon: WitcherIcon,
      price: "$38",
    },
    {
      name: "Psychonauts 2",
      icon: PsyIcon,
      price: "$28",
    },
    {
      name: "Halo Infinite",
      icon: HaloIcon,
      price: "$48",
    },
    {
      name: "Ghostrunner",
      icon: GhostRunnerIcon,
      price: "$31",
    },
    {
      name: "Hades",
      icon: HadesIcon,
      price: "$45",
    },
  ];
  const filteredGames = games.filter((game) => game.name.includes(input));
  return (
    <div className="all-games">
      <div className="status">
        <h1>All Games</h1>
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
          }}
          placeholder="search game..."
        />
      </div>
      <div className="games-library">
        {filteredGames.map((game) => (
          <div className="game-card">
            <img src={game.icon} className="game-image" alt="" />
            <p className="game-name">{game.name}</p>
            <div className="game-price">{game.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
