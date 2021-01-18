import React from "react";
import ReactDOM from "react-dom";

import { Text, StyleSheet, View } from "react-native";
import Container from "./Container";
import Command from "./Command";
import Title from "./Title";
import Escape from "./Escape";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Title title={"MILK TEA SOUND ALLIANCE"} />
        <View>
          <Command
            description={"STOP"}
            command={"START"}
          />
        </View>
        <Escape />
      </Container>
    );
  }
}
