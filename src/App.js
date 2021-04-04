import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { Text, StyleSheet, View } from "react-native";

import Container from "./Container";
import Command from "./Command";
import Title from "./Title";
import Result from "./Result";
import Size from "./Size";
import About from "./About";

import noteValues from "./noteValues.json";

import * as Tone from "tone";


const noteMapArray = Object.keys(noteValues).map((note) => ({
  note,
  freq: noteValues[note],
}));
const totalNote = noteMapArray.length;

function App() {
  const [size, setSize] = useState("");
  const [note, setNote] = useState("C0");
  const [melody, setMelody] = useState([]);
  const [status, setStatus] = useState("stop");

  // let acl = new Accelerometer({ frequency: 5 });
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("melody updated", melody);
  }, [melody]);

  useEffect(() => {
    console.log("size updated", size);
  }, [size]);

  useEffect(() => {
    if (status === "stop") return;
    if (note) {
      console.log("note updated", note);
      setMelody((state) => [...state, note]);
    }
  }, [note, status]);

  function getAccelerometer() {

    window.ondevicemotion = function (event) {
      var accelerationX = event.accelerationIncludingGravity.x;
      var accelerationY = event.accelerationIncludingGravity.y;
      var accelerationZ = event.accelerationIncludingGravity.z;

      if (accelerationX <= -2) {

        if (accelerationX > -3 && accelerationX <= -2) {
          const pos = Math.floor(Math.random() * (51 - 35 + 1)) + 35;
          console.log(22222, accelerationX, pos, note);
          if (note) setNote(noteMapArray[pos].note);


        } else if (accelerationX > -4 && accelerationX <= -3) {
          const pos = Math.floor(Math.random() * (68 - 52 + 1)) + 52;
          console.log(333333, accelerationX, pos, note);
          if (note) setNote(noteMapArray[pos].note);


        } else if (accelerationX > -5 && accelerationX <= -4) {
          const pos = Math.floor(Math.random() * (85 - 69 + 1)) + 69;
          console.log(444444, accelerationX, pos);
          if (note) setNote(noteMapArray[pos].note);


        } else {
          const pos = Math.floor(Math.random() * (34 - 18 + 1)) + 18;
          if (note) setNote(noteMapArray[pos].note);
          console.log('000000', accelerationX, pos);
        }
      }
    }

    // acl.addEventListener("reading", () => {


    // console.log('000000', acl.x, pos);
    // if (acl.x <= -2) {
    //   console.log(acl.x, acl.y, acl.z);

    //   if (acl.x > -3 && acl.x <= -2) {
    //     const pos = Math.floor(Math.random() * (51 - 35 + 1)) + 35;
    //     console.log(22222, acl.x + acl.y + acl.z + pos);
    //     if (note) setNote(noteMapArray[pos].note);


    //   } else if (acl.x > -4 && acl.x <= -3) {
    //     const pos = Math.floor(Math.random() * (68 - 52 + 1)) + 52;
    //     console.log(333333, acl.x, pos);
    //     if (note) setNote(noteMapArray[pos].note);


    //   } else if (acl.x > -5 && acl.x <= -4) {
    //     const pos = Math.floor(Math.random() * (85 - 69 + 1)) + 69;
    //     console.log(444444, acl.x, pos);
    //     if (note) setNote(noteMapArray[pos].note);


    //   } else {
    //     const pos = Math.floor(Math.random() * (34 - 18 + 1)) + 18;
    //     if (note) setNote(noteMapArray[pos].note);
    //     console.log('000000', acl.x, pos);
    //   }
    // }
    // });
    // acl.start();
    Tone.start()
    setStatus("start");
  }

  function waitAccelerometer() {
    setStatus("wait");
    Tone.Transport.stop();
    setMelody([]);
  }

  function stopAccelerometer() {
    // acl.stop();

    setStatus("stop");
    // setNote(null);
  }

  return (
    <Container>
      <Title title={"MILK TEA SOUND ALLIANCE"} />
      <Size setSize={setSize} />
      <View>
        <Command
          getAccelerometer={getAccelerometer}
          stopAccelerometer={stopAccelerometer}
          description={"STOP"}
          command={"START"}
        />
      </View>
      <Result melody={melody} status={status} size={size} waitAccelerometer={waitAccelerometer} />
      <About />
    </Container>
  );
}

export default App;
