import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from './button';
import { deleteExpense, flipImportant } from './firestore';

// Screen that edit an existing expense.
function EditExpenseScreen({ navigation: { goBack }, route }) {
    const expenseId = route.params.expenseId;
    const importantWord = route.params.important ? "Mark As Unimportant" : "Mark As Important";
    const importantQuestion = 
        route.params.important ? 
            "Are you sure you want to mark this as unimportant?" : 
            "Are you sure you want to mark this as important?";
    const onPressDelete = () => {
        Alert.alert("Important",
            "Are you sure you want to delete this?",
            [
                {
                    text: "No",
                },
                { text: "Yes", onPress: () => deleteExpense(expenseId).then(goBack()) }
            ]);
    };
    const onPressMarkImportant = () => {
        Alert.alert("Important",
            importantQuestion,
            [
                {
                    text: "No",
                },
                { text: "Yes", onPress: () => flipImportant(expenseId).then(goBack()) }
            ]);
    };
    return (
        <View style={styles.view}>
            <Button onPress={onPressMarkImportant} text={importantWord} />
            <Button onPress={onPressDelete} text="Delete" />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20
    }
});

export default EditExpenseScreen;