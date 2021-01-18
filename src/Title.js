import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { useMediaQuery } from "react-responsive";

export default function Title({ title }) {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const styles = {
    fontSize: isSmallMobile ? 50 : 70,
    fontFamily: "Faster One",
    fontFamily: "Monoton",
    color: "#FF00DE",
    letterSpacing: 8,
    textShadowColor: "#FF00DE",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 30,
    marginBottom: 16,
    textAlign: "center"
  };

  return <Text style={styles}>{title}</Text>;
}

Title.propTypes = {
  title: PropTypes.string
};
