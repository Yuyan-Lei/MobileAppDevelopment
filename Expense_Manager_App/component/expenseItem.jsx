import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DARK_TEXT_COLOR, DEFAULT_BUTTON_COLOR, LIGHT_TEXT_COLOR, PRESSED_BUTTON_COLOR, WHITE_COLOR } from './color';

// Components that shows the data of any single expense.
function ExpenseItem(props) {
    // Click this component will navigate to edit expense page.
    onPressItem = () => {
        props.navigate('Edit Expense', { expenseId: props.expenseId, important: props.important });
    }

    return (
        <Pressable 
            android_ripple={{color: PRESSED_BUTTON_COLOR}}
            style={({ pressed }) => 
                [{ backgroundColor: pressed ? PRESSED_BUTTON_COLOR : DEFAULT_BUTTON_COLOR }, 
                styles.button]} onPress={onPressItem}>
            <Text style={styles.descriptionText}>{props.description}</Text>
            <View style={styles.emptyBlock}></View>
            <View style={styles.price}>
                <Text style={styles.priceText}>{props.price}</Text>
            </View>
        </Pressable>);
};

const styles = StyleSheet.create({
    button: {
        margin: 10,
        marginTop: 30,
        borderRadius: 5,
        shadowOffset: {
            width: 1,
            height: 1
        },
        width: '90%',
        shadowOpacity: 1,
        shadowRadius: 1,
        alignSelf: "center",
        alignItems: "center",
        padding: 15,
        flexDirection: "row",
        flexWrap: "wrap",
        elevation: 10 
    },
    emptyBlock: {
        flex: 1
    },
    price: {
        borderRadius: 5,
        padding: 5,
        backgroundColor: WHITE_COLOR,
        width: '20%',
        alignItems: 'center',
    },
    descriptionText: {
        fontSize: 20,
        color: LIGHT_TEXT_COLOR,
        fontWeight: 'bold'
    },
    priceText: {
        fontSize: 15,
        color: DARK_TEXT_COLOR,
        fontWeight: 'bold'
    }
});

export default ExpenseItem;