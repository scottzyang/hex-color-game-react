import './Swatch.css';

function Swatch({ selectedColor, currentColor, setSelectedColor}) {
  return (
    <div className='swatch-container' style={{ backgroundColor: currentColor}} onClick={() => setSelectedColor(currentColor)}>
    </div>
  );
}

export default Swatch;
