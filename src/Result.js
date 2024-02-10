function Result({ currentColor, selectedColor }) {
  return (
    <div>
      {currentColor !== selectedColor && selectedColor !== '' &&
      <div>
        <h2>Sorry! Try Again!</h2>
        <button onClick={() => window.location.reload()}>Reset/Play Again</button>
      </div>
      }

      {currentColor === selectedColor &&
      <div>
        <h2>Congrats!</h2>
        <button onClick={() => window.location.reload()}>Reset/Play Again</button>
      </div>}
    </div>
  );
}

export default Result;
