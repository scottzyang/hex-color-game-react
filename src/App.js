import './App.css';
import SwatchList from './SwatchList';
import Stopwatch from './Stopwatch';
import { useEffect, useState } from 'react';

function App() {
  const [currentColor, setCurrentColor] = useState('#000000')
  const [colorOne, setColorOne] = useState('#000000')
  const [colorTwo, setColorTwo] = useState('#000000')
  const [colorThree, setColorThree] = useState('#000000')
  const [selectedColor, setSelectedColor] = useState('')
  const [gameStart, setGameStart] = useState(false)

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const hexColor = `#${red.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}`
    return hexColor
  }

  const startGame = () => {
    setGameStart(true)

    const generatedColorOne = randomColor()
    const generatedColorTwo = randomColor()
    const generatedColorThree = randomColor()

    const swatchColors = [generatedColorOne, generatedColorTwo, generatedColorThree]
    const correctAnswer = swatchColors[Math.floor(Math.random() * swatchColors.length)]

    setColorOne(generatedColorOne)
    setColorTwo(generatedColorTwo)
    setColorThree(generatedColorThree)
    setCurrentColor(correctAnswer)
  }

  return (
    <div className="App">
      <Stopwatch />
      <SwatchList selectedColor={selectedColor} colorOne={colorOne} colorTwo={colorTwo} colorThree={colorThree} randomColor={randomColor} setSelectedColor={setSelectedColor}/>
      <p>Which color is: <strong>{currentColor}</strong></p>
      {!gameStart && <button onClick={() => startGame()}>Click Here to Start!</button>}
      {selectedColor && <p>Selected: {selectedColor}</p>}
      {currentColor === selectedColor &&
      <div>
        <h2>Congrats! That was correct!</h2>
        <button onClick={() => window.location.reload()}>Reset/Play Again</button>
      </div>}
      {currentColor !== selectedColor && selectedColor !== '' &&
      <div>
        <h2>Sorry! Try Again!</h2>
        <button onClick={() => window.location.reload()}>Reset/Play Again</button>
      </div>}
    </div>
  );
}

export default App;
