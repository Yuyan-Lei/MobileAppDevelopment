import { Pressable, Text, StyleSheet } from 'react-native';
import { DEFAULT_BUTTON_COLOR, LIGHT_TEXT_COLOR, PRESSED_BUTTON_COLOR } from './color';

// Sherable button component. Implemeted using Pressable.
function Button(props) {
    return (
        <Pressable 
            onPress={props.onPress} 
            android_ripple={{color: PRESSED_BUTTON_COLOR}}
            style={({ pressed }) => 
                [{ backgroundColor: pressed ? DEFAULT_BUTTON_COLOR : PRESSED_BUTTON_COLOR }, styles.button]}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>);
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        alignItems: "center",
        padding: 10,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        marginTop: 10,
        minWidth: 120,
        marginLeft: 10,
        marginRight: 10,
        elevation: 10
    },
    text: {
        color: LIGHT_TEXT_COLOR,
    }
});

export default Button;