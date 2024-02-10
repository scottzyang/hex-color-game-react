import './App.css';
import SwatchList from './SwatchList';
import { useState } from 'react';
import Result from './Result';

function App() {
  const [currentColor, setCurrentColor] = useState('#000000')
  const [colorOne, setColorOne] = useState('#000000')
  const [colorTwo, setColorTwo] = useState('#000000')
  const [colorThree, setColorThree] = useState('#000000')
  const [selectedColor, setSelectedColor] = useState('')
  const [gameStart, setGameStart] = useState(false)
  const [disabled, setDisabled] = useState(true)

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

    setDisabled(false)
    setColorOne(generatedColorOne)
    setColorTwo(generatedColorTwo)
    setColorThree(generatedColorThree)
    setCurrentColor(correctAnswer)
  }

  return (
    <div className="App">
      <h1>COLOR GUESSER</h1>
      <SwatchList disabled={disabled} colorOne={colorOne} colorTwo={colorTwo} colorThree={colorThree} randomColor={randomColor} setSelectedColor={setSelectedColor}/>
      {gameStart && <p>Which color is: <strong>{currentColor}</strong></p>}
      {!gameStart && <button onClick={() => startGame()}>Click Here to Start!</button>}
      {selectedColor && <p>Selected: {selectedColor}</p>}
      <Result currentColor={currentColor} selectedColor={selectedColor}/>
    </div>
  );
}

export default App;
