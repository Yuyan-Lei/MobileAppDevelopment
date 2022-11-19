import { Pressable, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { BACKGROUND_COLOR, LIGHT_TEXT_COLOR } from './color';

function AddExpenseButton(props) {
    return (
        <Pressable 
            onPress={props.onPress} 
            style={styles.button}>
                {({pressed}) => 
                <Icon name="add" 
                    style={{fontSize: 20}} 
                    color={pressed? 
                        BACKGROUND_COLOR : LIGHT_TEXT_COLOR}/>}
            
        </Pressable>);
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
    },
});

export default AddExpenseButton;