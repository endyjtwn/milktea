import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { useMediaQuery } from "react-responsive";

import { Shake } from 'reshake'

export default function Command({ getAccelerometer, stopAccelerometer, description, command }) {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const styles = {

    container: {
      flexDirection: isSmallMobile ? "column" : "row",
      marginTop: "1rem",
      marginBottom: "1rem",
      alignItems: "center",
      justifyContent: isSmallMobile ? "space-around" : "center",
      height: isSmallMobile ? 150 : "auto"
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
      padding: "0.5rem",
      paddingLeft: "3rem",
      paddingRight: "3rem",
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
      padding: "0.5rem",
      paddingLeft: "3rem",
      paddingRight: "3rem",
    }
  };


  return (
    <View style={styles.container} >
      <Shake>
        <Text style={styles.command} onClick={getAccelerometer}>{command}</Text>
      </Shake>
      <Shake>
        <Text style={styles.description} onClick={stopAccelerometer}>{description}</Text>
      </Shake>
    </View >
  );
}



Command.propTypes = {
  description: PropTypes.string,
  command: PropTypes.string
};
