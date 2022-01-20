import React from "react";
import AssassinIcon from "./assets/assassins.png";
import SackboyIcon from "./assets/sackboy.png";
import SpidermanIcon from "./assets/spiderman.png";
import Card from "./Card";

const ActiveGames = () => {
  const [input, setInput] = React.useState("");

  const games = [
    {
      icon: AssassinIcon,
      name: "Assassins Creed Valhalla",
      version: "PS5 Version",
      progress: "60%",
      id: "60",
    },
    {
      icon: SackboyIcon,
      name: "Sackboy A Great Advanture",
      version: "PS5 Version",
      progress: "75%",
      id: "75",
    },
    {
      icon: SpidermanIcon,
      name: "Spiderman Miles Morales",
      version: "PS5 Version",
      progress: "80%",
      id: "80",
    },
  ];

  const filteredGames = games.filter((game) => game.name.includes(input));

  return (
    <div className="games">
      <div className="status">
        <h1>Active Games</h1>
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
          }}
          placeholder="search game..."
        />
      </div>
      <div className="cards">
        {filteredGames.map((game) => (
          <Card game={game} />
        ))}
      </div>
    </div>
  );
};

export default ActiveGames;
