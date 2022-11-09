import React from 'react';
import styles from '../assets/styles';
import { Text, View } from 'react-native';

export default function Header({ pending }) {
	return (
		<View style={[styles.headerBar, styles.bgSunglo]}>
			<Text style={styles.appName}> To Buy </Text>
			<Text style={[styles.badge, styles.bgWhite]}>{pending}</Text>
		</View>
	)
}
