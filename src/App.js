import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Text, StyleSheet, View } from "react-native";

import Container from "./Container";
import Command from "./Command";
import Title from "./Title";
import Result from "./Result";
import Size from "./Size";

import noteValues from "./noteValues.json";

/**
 * o.low['10']
 * {
 *  low: {
 *  10: [],
 * 20: []
 * },
 *  middle: ['f#'],
 * high: ['sdfsdf']
 * }
 * 
 * alc
 * low = 200
 * mid = 500
 * high = 1000
 */

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

  const [status, setStatus] = useState('stop');

  let acl = new Accelerometer({ frequency: 5 });
  const [result, setResult] = useState("");

  useEffect(() => {
    if (status === 'stop') return
    if (note)
      setMelody(state => [...state, note])
  }, [note, status])

  console.log(status);

  useEffect(() => {
    console.log(melody)
  }, [melody])

  function getAccelerometer() {
    acl.addEventListener("reading", () => {
      if (acl.x < -3) {
        const pos = Math.floor(Math.random() * totalNote + 1);
        setNote(noteMapArray[pos].note);
      }
    });
    acl.start();
    setStatus('start');
  }

  function stopAccelerometer() {
    acl.stop();
    setStatus('stop');
    setNote(null);
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
      <Result result={result} melody={melody} status={status} />
    </Container>
  );
}

export default App;
