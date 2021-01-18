import React from "react";
import { View, Text } from "react-native";

export default function Escape() {

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        See&nbsp;
        <Text style={styles.command}
        >Result&nbsp;
        </Text>
        here
      </Text>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24
  },
  command: {
    fontSize: 30,
    color: "#7DF9FF",
    textShadowColor: "#7DF9FF",
    cursor: "pointer",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 20
  },
  description: {
    fontSize: 20,
    color: "#7fff00",
    textShadowColor: "#7fff00",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20
  }
};
