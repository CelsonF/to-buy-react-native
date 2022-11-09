import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles';

export default function Task({ id, descricao, quantity }) {
	return (
		<View style={styles.li}>
			<Text style={styles.liText}>{descricao}</Text>
			<Text style={styles.liText}>{quantity}</Text>
		</View>
	);
}
