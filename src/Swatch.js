import './Swatch.css';

function Swatch({ disabled, currentColor, setSelectedColor}) {
  return (
    <div
      className='swatch-container'
      style={
        disabled
          ? { pointerEvents: "none", backgroundColor: "#000000" }
          : { backgroundColor: currentColor }
      }
      onClick={() => setSelectedColor(currentColor)}
    >
    </div>
  );
}

export default Swatch;
