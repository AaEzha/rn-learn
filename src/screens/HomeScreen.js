import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hai</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Components') }
        title="Go to Components Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('List') }
        title="Go to List Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Image') }
        title="Go to Image Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 30
  },
  button: {
    marginBottom: 20,
    paddingBottom: 10
  }
});

export default HomeScreen;
