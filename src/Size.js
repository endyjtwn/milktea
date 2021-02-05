import React, { useState } from "react";
import { View, Text } from "react-native";

const sizes = ["small", "medium", "large"]; // 5, 10, 15 mins
 
export default function Size({ setSize }) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Select:&nbsp;
        <select
          onChange={(e) => setSize(e.target.value)}
          style={styles.command}
        >
          <option value="" disabled selected>
            -size-
          </option>

          {sizes.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </select>
      </Text>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  command: {
    fontSize: 30,
    color: "#000000",
    textShadowColor: "#7DF9FF",
    cursor: "pointer",
    fontFamily: "Orbitron",
    border: "1px solid",
    borderRadius: ".5rem",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginRight: ".5rem",

    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 20,
  },
  description: {
    fontSize: 20,
    color: "#7fff00",
    textShadowColor: "#7fff00",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  },
  value: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Orbitron",
    position: "absolute",
    top: "4rem",
    width: "100%",
  },
};
