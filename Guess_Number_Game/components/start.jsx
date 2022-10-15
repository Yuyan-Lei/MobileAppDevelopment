import { View, StyleSheet, Alert } from "react-native";
import Title from "./title";
import Card from "./card";
import GameButton from "./gameButton";
import NumberInput from "./numberInput";
import { useState } from "react";

// Start screen component.
const Start = (props) => {
  const [inputNumber, setInputNumber] = useState("");
  const handleConfirm = () => {
    const parsedNumber = parseInt(inputNumber, 10);
    if (!isNaN(parsedNumber) 
      && parsedNumber >= 1020 && parsedNumber <= 1029) {
      // If input number is valid, update the number and go to game screen.
      props.setNumber(parsedNumber);
      props.setScreenNumber(1);
    } else {
      // Alert when input number is invalid. 
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1020 and 1029.",
        [{ text: "Okay", onPress: () => setInputNumber("") }]
      );
    }
  };
  const handleClear = () => {
    setInputNumber("");
  };
  return (
    <View>
      <Title title="Guess My Number" />
      <Card title="Enter a Number">
        <NumberInput 
          number={inputNumber} 
          onChangeNumber={setInputNumber}/>
        <View style={styles.row}>
          <GameButton 
            style={styles.button} 
            onClick={handleClear} 
            title="Reset" />
          <View style={styles.block}></View>
          <GameButton 
            style={styles.button} 
            onClick={handleConfirm} 
            type={"confirm"} 
            title="Confirm" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    alignSelf: "center",
    width: "75%",
    padding: 10
  },
  button: {
    flex: 2
  },
  block: {
    flex: 1
  }
});

export default Start;
