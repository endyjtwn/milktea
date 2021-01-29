import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";


export default function Command({ getAccelerometer, stopAccelerometer, description, command }) {

  return (
    <View style={styles.container}>
      <Text style={styles.command} onClick={getAccelerometer}>{command}</Text>
      <Text style={styles.description} onClick={stopAccelerometer}>{description}</Text>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 30
  },

  command: {
    fontSize: 40,
    color: "#000000",
    textShadowColor: "#7DF9FF",
    fontFamily: "Orbitron",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 30,
    flex: 1,
    marginRight: 8,
    textAlign: "center",
    cursor: "pointer",
    background: "#7fff00",
    borderRadius: "1rem",
    padding: "0.5rem"
  },
  description: {
    fontSize: 40,
    color: "#FFFFFF",
    textShadowColor: "#7fff00",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 30,
    textAlign: "center",
    flex: 1,
    cursor: "pointer",
    background: "red",
    borderRadius: "1rem",
    padding: "0.5rem"
  }
};

Command.propTypes = {
  description: PropTypes.string,
  command: PropTypes.string
};
