import { backgroundStartColor, backgroundEndColor, white } from './components/Colors'
import { StyleSheet } from 'react-native';
import { useState } from "react";
import Start from "./components/start";
import Game from "./components/game";
import Final from "./components/final";
import { LinearGradient } from "expo-linear-gradient";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function Screen(props) {
  const screenNumber = props.screenNumber;
  const setScreenNumber = props.setScreenNumber;
  const number = props.number;
  const answer = props.answer;
  const setNumber = props.setNumber;
  const won = props.won;
  const setWon = props.setWon;
  const setGameOver = props.setGameOver;
  if (screenNumber === 0) {
    return (
      <Start 
        setScreenNumber={setScreenNumber} 
        setNumber={setNumber} 
        won={won}
        setWon={setWon}
        answer={answer}
        />);
  } else if (screenNumber === 1) {
    return (
      <Game
        setScreenNumber={setScreenNumber}
        number={number}
        answer={answer}
        setWon={setWon}
      />
    );
  } else {
    return (<Final 
      setScreenNumber={setScreenNumber} 
      answer={answer}
      won={won}
      setGameOver={setGameOver}
       />);
  }
}

export default function App() {
  // Screen number:
  // 0. Start screen
  // 1. Game screen
  // 2. Final screen
  const [screenNumber, setScreenNumber] = useState(0);
  // Number that user inputs.
  const [number, setNumber] = useState(-1);
  // True if user wins the game.
  const [won, setWon] = useState(false);
  // Correct answer of the game.
  const [answer, setAnswer] = useState(0);
  // True if current game is over.
  const [gameOver, setGameOver] = useState(false);
  // At the start of game, generates answer randomly.
  if (answer === 0) {
    setAnswer(getRandomInt(1020, 1029));
  }
  // If game is over, generates answer randomly and reset won & gameOver.
  if (gameOver) {
    setAnswer(getRandomInt(1020, 1029));
    setGameOver(false);
    setWon(false);
  }

  return (
    <LinearGradient
      colors={[backgroundStartColor, backgroundEndColor]}
      style={styles.container}
    >
      <Screen
        screenNumber={screenNumber}
        setScreenNumber={setScreenNumber}
        number={number}
        setNumber={setNumber}
        won={won}
        setWon={setWon}
        answer={answer}
        setGameOver={setGameOver}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
