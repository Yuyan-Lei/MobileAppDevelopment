import { Text, StyleSheet, View } from "react-native";
import { cardBackgroundColor, cardTitleColor } from "./Colors";

// Card component.
const Card = (props) => {
  return (
    <View style={styles.popupArea}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  popupArea: {
    borderRadius: 5,
    backgroundColor: cardBackgroundColor,
    alignSelf: "center",
    padding: 15,
    marginTop: 40,
    alignItems: "center",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  title: {
    color: cardTitleColor,
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10
  }
});
export default Card;