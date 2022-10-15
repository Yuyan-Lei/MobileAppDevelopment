import { StyleSheet, Text, Pressable } from "react-native";
import { cancelButtonColor, confirmButtonColor } from "./Colors";

// Button component.
const GameButton = (props) => {
  const buttonText = props.type === "confirm" ? 
  (<Text style={styles.confirmButton}>{props.title}</Text>) : 
  (<Text style={styles.cancelButton}>{props.title}</Text>);
  return (
    <Pressable style={styles.cancelButton} onPress={props.onClick}>
      {buttonText}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  confirmButton: {
    color: confirmButtonColor,
    fontSize: 23,
    padding: 10
  },
  cancelButton: {
    color: cancelButtonColor,
    fontSize: 23,
    padding: 10
  }
});

export default GameButton;