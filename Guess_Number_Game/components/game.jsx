import { View, Modal, StyleSheet } from "react-native";
import Card from "./card";
import GameButton from "./gameButton";

// Game screen component.
const Game = (props) => {
  const handleNext = () => {
    // If number input equals to answer, set won to true.
    props.setWon(props.answer === props.number);
    props.setScreenNumber(2);
  };
  const handleBack = () => {
    props.setScreenNumber(0);
  };
  const compareString = 
    props.number < props.answer ? "higher" : "lower";
  // Show different card based on whether user's input equals to answer.
  if (props.answer === props.number) {
    return (
      <Modal animationType="fade" transparent={true}>
        <View style={styles.winCard}>
          <Card title="Congrats! You Won!">
            <GameButton 
              onClick={handleNext} 
              type="confirm" 
              title="Thank You!" />
          </Card>
        </View>
      </Modal>
    );
  } else {
    const title =
      "You have chosen " +
      props.number +
      "\nThat's not my number! \nGuess " +
      compareString +
      "!";
    return (
      <Modal animationType="fade" transparent={true}>
        <View style={styles.gameCard}>
          <Card title={title}>
            <GameButton 
              onClick={handleNext} 
              title="I am done" />
            <GameButton 
              onClick={handleBack} 
              type="confirm" 
              title="Let Me Guess Again" />
          </Card>
        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  gameCard: {
    paddingTop: "60%"
  },
  winCard: {
    paddingTop: "70%"
  }
});

export default Game;