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
  // const [notes, setNotes] = useState([])

  const [size, setSize] = useState(["-size-", "Small", "Medium", "Large"]); // 5, 10, 15 mins
  const handleAddrTypeChange = (e) => console.log(size[e.target.value]);

  const [note, setNote] = useState(null);
  const [melody, setMelody] = useState([]);

  let acl = new Accelerometer({ frequency: 5 });
  const [result, setResult] = useState("");

  const aclx = [];
  const acly = [];
  const aclz = [];

  console.log("result", result);

  function getAccelerometer() {
    acl.addEventListener("reading", () => {
      aclx.push(acl.x);
      acly.push(acl.y);
      aclz.push(acl.z);

      const pos = Math.floor(Math.random() * totalNote + 1);
      setNote(noteMapArray[pos].note);
    });
    acl.start();
  }

  function stopAccelerometer() {
    acl.stop();
    setResult(aclx + acly + aclz);
    setNote(null);

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
      <h1
        style={{
          color: "white",
          fontFamily: "Monoton",
          textShadowColor: "#FF00DE",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 30,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Just keep shaking. Alright?
      </h1>
      <h2
        style={{
          color: "white",
          fontFamily: "Monoton",
          textShadowColor: "#FF00DE",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 30,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        {note && `Playing note: ${note}`}
      </h2>
      <Result result={result} note={note} />
    </Container>
  );
}

export default App;
