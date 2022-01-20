import Avatar from "./assets/avatar.png";
import StreamIcon from "./assets/twitch.png";
import GameIcon from "./assets/steam.png";
import LinkIcon from "./assets/upcoming.png";
import LibraryIcon from "./assets/library.png";
import ControllerIcon from "./assets/controller.png";
import * as React from "react";
import ActiveGames from "./ActiveGames";
import Games from "./Games";
import Oops from "./Oops";

const Dashboard = () => {
  const [currentFolder, setCurrentFolder] = React.useState("active");
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
            <h2
              onClick={(e) => {
                e.preventDefault();
                setCurrentFolder("active");
              }}
            >
              Streams
            </h2>
          </div>
          <div className="link">
            <img src={GameIcon} alt="" />
            <h2
              onClick={(e) => {
                e.preventDefault();
                setCurrentFolder("games");
              }}
            >
              Games
            </h2>
          </div>
          <div className="link">
            <img src={LinkIcon} alt="" />
            <h2
              onClick={(e) => {
                e.preventDefault();
                setCurrentFolder("oops");
              }}
            >
              New
            </h2>
          </div>
          <div className="link">
            <img src={LibraryIcon} alt="" />
            <h2
              onClick={(e) => {
                e.preventDefault();
                setCurrentFolder("oops");
              }}
            >
              Library
            </h2>
          </div>
        </div>
        <div className="pro">
          <h2>Join pro for free games.</h2>
          <img src={ControllerIcon} alt="" />
        </div>
      </div>
      {currentFolder === "active" ? (
        <ActiveGames />
      ) : currentFolder === "games" ? (
        <Games />
      ) : (
        <Oops />
      )}
    </>
  );
};

export default Dashboard;
