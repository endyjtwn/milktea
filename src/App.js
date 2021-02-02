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
      if (acl.x <= -2) {
        if (acl.x > -3 && acl.x <= -2) {
          const pos = Math.floor(Math.random() * 51 + 35);
          setNote(noteMapArray[pos].note);

          console.log(2222);
        } else if (acl.x > -4 && acl.x <= -3) {
          const pos = Math.floor(Math.random() * 68 + 52);
          setNote(noteMapArray[pos].note);

          console.log(33333);
        } else if (acl.x > -5 && acl.x <= -4) {
          const pos = Math.floor(Math.random() * 85 + 69);
          setNote(noteMapArray[pos].note);

          console.log(44444);
        } else if (acl.x > -6 && acl.x <= -5) {
          const pos = Math.floor(Math.random() * 102 + 86);
          setNote(noteMapArray[pos].note);

          console.log(55555);
        } else if (acl.x > -7 && acl.x <= -6) {
          const pos = Math.floor(Math.random() * 119 + 103);
          setNote(noteMapArray[pos].note);

          console.log(66666);
        } else if (acl.x > -8 && acl.x <= -7) {
          const pos = Math.floor(Math.random() * 137 + 120);
          setNote(noteMapArray[pos].note);

          console.log(77777);
        }
        console.log(acl.x, acl.y, acl.z);

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
