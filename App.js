import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './assets/styles';
import Tasks from './components/Tasks';
import Header from './components/Header';

export default function App() {
	const [hidden, setHidden] = useState(true)
	const [listItems, setListItems] = useState([]);


	const addItem = (item) => {
		if (item.length > 0) {
			const newItem = {
				id: Math.random().toString(),
				descricao: item,
			};
			setListItems([...listItems, newItem]);
		}
	};

	const alterItem = (id, description) => {
		const i = listItems.findIndex((item) => item.id === id);
		let newList = [...listItems];
		newList[i].descricao = description;
		setListItems(newList);
	};

	const deleteItem = (id) => {
		setListItems(listItems.filter((item) => item.id !== id));
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
			style={styles.app}
		>
			<View style={styles.conteudo}>
				<Header pending={listItems.length} />
				<Tasks listItems={listItems}
					onAdd={addItem}
					onAlterItem={alterItem}
					onDelete={deleteItem}
				/>
			</View>
			<StatusBar style="light" />
		</KeyboardAvoidingView>
	);
}
