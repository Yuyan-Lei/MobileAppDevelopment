import { ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import { db } from './firestore';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import ExpenseItem from './expenseItem';

// Components that contains the list of expenses.
// if showImportant is set to true, only show important expenses.
function ExpenseList(props) {
    const [data, setData] = useState([]);
    if (props.showImportant) {
        useEffect(() => {
            const q = query(collection(db, "expenses"), where("important", "==", true));
            // Uses onSnapshot to listen to real time updates.
            const unsubscribe = onSnapshot(q, (snapshot) => {
                setData(
                    snapshot.docs.map(
                        entry => <ExpenseItem
                        key= {entry.id}
                        description = {entry.data().description}
                        price = {entry.data().price}
                        important = {entry.data().important}
                        navigate = {props.navigate}
                        expenseId = {entry.id}
                    />));
            });

            return () => unsubscribe()
        }, []);
    } else {
        useEffect(() => {
            const unsubscribe = onSnapshot(collection(db, "expenses"), (snapshot) => {
                setData(
                    snapshot.docs.map(entry => 
                    <ExpenseItem
                        key= {entry.id}
                        description = {entry.data().description}
                        price = {entry.data().price}
                        important = {entry.data().important}
                        navigate = {props.navigate}
                        expenseId = {entry.id}
                    />));
            });

            return () => unsubscribe()
        }, []);
    }
    return (
      <ScrollView style={{ flex: 1, flexDirection: "column" }}>
        {data}
      </ScrollView>
    );
};

export default ExpenseList;