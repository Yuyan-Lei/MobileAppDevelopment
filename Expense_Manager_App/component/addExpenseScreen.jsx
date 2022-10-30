import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState } from "react";
import { addExpenses } from './firestore';
import Button from './button';
import { DARK_TEXT_COLOR, INPUT_BACKGROUND_COLOR, LIGHT_TEXT_COLOR } from './color';

// Screen that adds expense into db.
function AddExpenseScreen({ navigation: { goBack }}) {
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const onSubmitExpense = () => {
        const parsedPrice = parseInt(price, 10);
        if (isNaN(parsedPrice) || parsedPrice <= 0 || description === '') {
            // Alert when input is invalid. 
            Alert.alert(
                "Invalid input",
                "Please check your input values.",
                [{ text: "Okay"}]
            );
        } else {
            addExpenses({description, price}).then(() => goBack());
        }
    };
    // Go back to home screen when cancel.
    const onCancel = () => { goBack() };
    return (
      <View style={styles.view}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.amountForm}>
            <Text style={styles.normalText}>Amount</Text>
            <TextInput style={styles.amountInput} onChangeText={setPrice} value={price} keyboardType="numeric" />
        </View>
        <View style={styles.descriptionForm}>
            <Text style={styles.normalText}>Description</Text>
            <TextInput 
                style={styles.descriptionInput} 
                onChangeText={setDescription} 
                multiline={true}
                value={description} />
        </View>
        <View style={styles.buttonRow}>
            <Button onPress={onCancel} text="Cancel"/>
            <Button onPress={onSubmitExpense} text="Submit"/>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    view: {
        width: "90%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: "40%"
    },
    title: {
        fontSize: 40,
        color: LIGHT_TEXT_COLOR,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 20
    },
    normalText: {
        fontSize: 15,
        color: DARK_TEXT_COLOR,
        fontWeight: "bold",
        marginTop: 20,
    },
    amountForm: {
        width: "90%",
    },
    descriptionForm: {
        width: "90%",
    },
    amountInput: {
      fontSize: 20,
      borderRadius: 4,
      marginTop: 10,
      marginBottom: 10,
      padding: 10,
      width: '100%',
      alignSelf: "center",
      outline: "none",
      backgroundColor: INPUT_BACKGROUND_COLOR,
      color: DARK_TEXT_COLOR,
    },
    descriptionInput: {
        fontSize: 20,
        borderRadius: 4,
        marginTop: 10,
        padding: 10,
        width: '100%',
        height: 100,
        alignSelf: "center",
        backgroundColor: INPUT_BACKGROUND_COLOR,
        outline: "none",
        color: DARK_TEXT_COLOR,
      },
    buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
  });

export default AddExpenseScreen;