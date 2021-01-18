import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Text, StyleSheet, View } from "react-native";
import Container from "./Container";
import Command from "./Command";
import Title from "./Title";
import Result from "./Result";


function App() {
  const [result, setResult] = useState("");
  let acl = new Accelerometer({ frequency: 5 });
  const aclx = [];
  const acly = [];
  const aclz = [];
  function getAccelerometer() {
    acl.addEventListener('reading', () => {
      aclx.push(acl.x);
      acly.push(acl.y);
      aclz.push(acl.z);

      // console.log("Acceleration along the X-axis " + aclx);
      // console.log("Acceleration along the Y-axis " + acly);
      // console.log("Acceleration along the Z-axis " + aclz);

    });
    acl.start();

  }

  function stopAccelerometer() {
    acl.stop();
    setResult(aclx + acly + aclz);
    console.log(2222, result);
  }

  return (
    <Container>
      <Title title={"MILK TEA SOUND ALLIANCE"} />
      <View>
        <Command
          getAccelerometer={getAccelerometer}
          stopAccelerometer={stopAccelerometer}
          description={"STOP"}
          command={"START"}
        />
      </View>
      <Result result={result} />
    </Container >
  );
}

export default App;
