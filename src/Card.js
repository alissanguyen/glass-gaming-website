const Card = (props) => {
  const game = props.game;
  return (
    <div className="card">
      <img src={game.icon} alt="" className="game-img" />
      <div className="card-info">
        <h2>{game.name}</h2>
        <p>{game.version}</p>
        <div className="progress" id={game.id}></div>
      </div>
      <h2 className="percentage">{game.progress}</h2>
    </div>
  );
};

export default Card;
