import { TextInput, StyleSheet } from "react-native";
import { cardTitleColor } from "./Colors";

// Number input component.
const NumberInput = (props) => {
    return (
    <TextInput
        style={styles.textInput}
        onChangeText={props.onChangeNumber}
        value={props.number}
        maxLength="4"
        keyboardType="numeric"
        textAlign="center"
    />);
};

const styles = StyleSheet.create({
    textInput: {
      margin: 10,
      marginTop: 30,
      fontSize: 30,
      color: cardTitleColor,
      textAlign: "center",
      borderBottomWidth: 2,
      borderBottomColor: cardTitleColor,
      width: 80,
      alignSelf: "center",
      outline: "none"
    }
  });

export default NumberInput;