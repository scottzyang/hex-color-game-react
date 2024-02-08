import Swatch from "./Swatch";
import './SwatchList.css'

function SwatchList({ selectedColor, colorOne, colorTwo, colorThree, setSelectedColor}) {
  return (
    <div className="swatch-list-container">
      <Swatch selectedColor={selectedColor} currentColor={colorOne} setSelectedColor={setSelectedColor}/>
      <Swatch selectedColor={selectedColor} currentColor={colorTwo} setSelectedColor={setSelectedColor}/>
      <Swatch selectedColor={selectedColor} currentColor={colorThree} setSelectedColor={setSelectedColor}/>
    </div>
  );
}


export default SwatchList;
