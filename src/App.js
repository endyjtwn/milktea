import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Text, StyleSheet, View } from "react-native";
import Container from "./Container";
import Command from "./Command";
import Title from "./Title";
import Result from "./Result";


function App() {
  const [result, setResult] = useState("");
  const aclx = [];
  const acly = [];
  const aclz = [];

  useEffect(() => {
    if (innerWidth < 786) {
      DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
          console.log("accelerometer permission granted");
          let acl = new Accelerometer({ frequency: 5 });

          acl.addEventListener('reading', () => {
            aclx.push(acl.x);
            acly.push(acl.y);
            aclz.push(acl.z);
          });
        }
      });
    }
  })

  function getAccelerometer() {
    let acl = new Accelerometer({ frequency: 5 });
    acl.addEventListener('reading', () => {
      aclx.push(acl.x);
      acly.push(acl.y);
      aclz.push(acl.z);
    });
    acl.start();
  }

  function stopAccelerometer() {
    let acl = new Accelerometer({ frequency: 5 });
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
