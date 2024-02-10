import Swatch from "./Swatch";
import './SwatchList.css'

function SwatchList({ disabled, colorOne, colorTwo, colorThree, setSelectedColor}) {
  return (
    <div className="swatch-list-container">
      <Swatch disabled={disabled} currentColor={colorOne} setSelectedColor={setSelectedColor}/>
      <Swatch disabled={disabled} currentColor={colorTwo} setSelectedColor={setSelectedColor}/>
      <Swatch disabled={disabled} currentColor={colorThree} setSelectedColor={setSelectedColor}/>
    </div>
  );
}


export default SwatchList;
