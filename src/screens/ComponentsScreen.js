import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.text2}>My name is { name }</Text>
        </View>
    ); 
};

const name = '@AkangProgrammer';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    text2: {
        fontSize: 20
    }
});

export default ComponentsScreen;