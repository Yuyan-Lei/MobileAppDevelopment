import { View, Image, StyleSheet } from "react-native";
import GameButton from "./gameButton";
import Card from "./card";
import Title from "./title";

// Final screen component.
const Final = (props) => {
  const handleConfirm = () => {
    // When the user clicks "Start Again" button, 
    // set gameOver to true and back to start screen.
    props.setGameOver(true);
    props.setScreenNumber(0);
  };
  // Show different picture based on whether user wins or not.
  const picture = props.won ? (
    <Image
      source={{
        uri: "https://picsum.photos/id/" + props.answer + "/100/100"
      }}
      style={styles.image}
    />
  ) : (
    <Image
      source={require("./emoji.png")}
      style={styles.image}
    />
  );
  return (
    <View>
      <Title title="Game is over" />
      <Card title="Here's your Picture">
        {picture}
        <GameButton onClick={handleConfirm} type="confirm" title="Start Again" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
      width: 100, 
      height: 100,
      marginBottom: 10
    }
});

export default Final;