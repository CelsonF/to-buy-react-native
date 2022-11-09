import React, { useState } from 'react';
import styles from '../assets/styles';
import { Text, View, ScrollView, FlatList, TextInput, Button, Keyboard } from 'react-native';
import Task from './Task';


export default function Tasks(props) {
	const [textInput, setTextInput] = useState('');
	const [numberInput, setNumberInput] = useState(0);

	const add = () => {
		props.onAdd(textInput);
		setTextInput('');
		_input.blur();
	}

	return (
		<View style={styles.component}>
			<View style={styles.componentHeader}>
				<Text style={styles.h1}> My Products </Text>
			</View>
			<View style={styles.componentContent}>
				<FlatList
					data={props.listItems}
					renderItem={({ item }) => (
						<Task id={item.id} descricao={item.descricao} quantity={item.quantity} />
					)}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={() => <View style={styles.liSeparator} />}
					style={styles.list}
				/>
			</View>
			<View style={[styles.field, styles.mt2]}>
				<TextInput style={styles.input}
					placeholder="Insert new item"
					defaultValue={textInput}
					onChangeText={(c) => setTextInput(c)}
					onSubmitEditing={add}
					onBlur={Keyboard.dismiss}
					ref={(r) => (_input = r)}
				/>
				<Button onPress={add} title="Add" />
			</View>
		</View>
	);
}
