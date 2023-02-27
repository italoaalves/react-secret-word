function StartScreen({ startGame }) {
  return (
    <div className="card">
      <h1>Secret Word</h1>
      <p>Let's play!</p>
      <button onClick={startGame}>START</button>
    </div>
  );
}

export default StartScreen;
