function GameOver({retry, score}) {
  return (
    <div className="card">
      <h1>Game Over</h1>
      <p>Your score was: {score}</p>
      <button onClick={retry}>Try again</button>
    </div>
  );
}

export default GameOver;
