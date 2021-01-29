import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Text, StyleSheet, View } from "react-native";

import Container from "./Container";
import Command from "./Command";
import Title from "./Title";
import Result from "./Result";
import Size from "./Size";

import noteValues from "./noteValues.json";

const noteMapArray = Object.keys(noteValues).map((note) => ({
  note,
  freq: noteValues[note],
}));
const totalNote = noteMapArray.length;

function App() {
  const [size, setSize] = useState(["-size-", "Small", "Medium", "Large"]); // 5, 10, 15 mins
  const handleAddrTypeChange = (e) => console.log(size[e.target.value]);

  const [note, setNote] = useState(null);
  const [melody, setMelody] = useState([]);

  let acl = new Accelerometer({ frequency: 5 });
  const [result, setResult] = useState("");

  // const aclx = [];
  // const acly = [];
  // const aclz = [];

  function getAccelerometer() {
    acl.addEventListener("reading", () => {
      // aclx.push(acl.x);
      // acly.push(acl.y);
      // aclz.push(acl.z);
      if (acl.y > 3) {
        console.log(acl.timestamp);
        const pos = Math.floor(Math.random() * totalNote + 1);
        setNote(noteMapArray[pos].note);
        console.log('NOTE', note);
      }


    });
    acl.start();
  }

  function stopAccelerometer() {
    console.log(11111111);

    acl.stop();
    // setNote(null);

    setMelody([...melody, note]);
  }

  return (
    <Container>
      <Title title={"MILK TEA SOUND ALLIANCE"} />
      <Size handleAddrTypeChange={handleAddrTypeChange} size={size} />
      <View>
        <Command
          getAccelerometer={getAccelerometer}
          stopAccelerometer={stopAccelerometer}
          description={"STOP"}
          command={"START"}
        />
      </View>
      <Result result={result} note={note} />
    </Container>
  );
}

export default App;
