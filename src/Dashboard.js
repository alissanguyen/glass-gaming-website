import Avatar from "./assets/avatar.png";
import StreamIcon from "./assets/twitch.png";
import GameIcon from "./assets/steam.png";
import LinkIcon from "./assets/upcoming.png";
import LibraryIcon from "./assets/library.png";
import ControllerIcon from "./assets/controller.png";
import AssassinIcon from "./assets/assassins.png";
import SackboyIcon from "./assets/sackboy.png";
import SpidermanIcon from "./assets/spiderman.png";
import * as React from "react";
import Card from "./Card";

const Dashboard = () => {
  const games = [
    {
      icon: AssassinIcon,
      name: "Assassins Creed Valhalla",
      version: "PS5 Version",
      progress: "60%",
    },
    {
      icon: SackboyIcon,
      name: "Sackboy A Great Advanture",
      version: "PS5 Version",
      progress: "60%",
    },
    {
      icon: SpidermanIcon,
      name: "Spiderman Miles Morales",
      version: "PS5 Version",
      progress: "60%",
    },
  ];

  const [input, setInput] = React.useState("");

  const filteredGames = games.filter((game) => game.name.includes(input));

  return (
    <>
      <div className="dashboard">
        <div className="user">
          <img src={Avatar} className="avatar" alt="" />
          <h3>Alissa Nguyen</h3>
          <p>Pro Member</p>
        </div>
        <div className="links">
          <div className="link">
            <img src={StreamIcon} alt="" />
            <h2>Streams</h2>
          </div>
          <div className="link">
            <img src={GameIcon} alt="" />
            <h2>Games</h2>
          </div>
          <div className="link">
            <img src={LinkIcon} alt="" />
            <h2>New</h2>
          </div>
          <div className="link">
            <img src={LibraryIcon} alt="" />
            <h2>Library</h2>
          </div>
        </div>
        <div className="pro">
          <h2>Join pro for free games.</h2>
          <img src={ControllerIcon} alt="" />
        </div>
      </div>
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
    </>
  );
};

export default Dashboard;
