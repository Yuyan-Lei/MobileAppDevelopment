import { Text, StyleSheet, View } from "react-native";
import { titleColor } from "./Colors";

// Title component.
const Title = (props) => {
  return (
    <View style={styles.titleArea}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleArea: {
    alignSelf: "center",
    borderWidth: 2,
    padding: 10,
    marginTop: "20%",
    borderColor: titleColor,
    alignItems: "center"
  },
  title: {
    color: titleColor,
    fontSize: 30
  }
});
export default Title;