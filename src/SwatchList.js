import Swatch from "./Swatch";
import './SwatchList.css'

function SwatchList({ disabled, selectedColor, colorOne, colorTwo, colorThree, setSelectedColor}) {
  return (
    <div className="swatch-list-container">
      <Swatch disabled={disabled} selectedColor={selectedColor} currentColor={colorOne} setSelectedColor={setSelectedColor}/>
      <Swatch disabled={disabled} selectedColor={selectedColor} currentColor={colorTwo} setSelectedColor={setSelectedColor}/>
      <Swatch disabled={disabled} selectedColor={selectedColor} currentColor={colorThree} setSelectedColor={setSelectedColor}/>
    </div>
  );
}


export default SwatchList;
