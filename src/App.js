import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { Text, StyleSheet, View } from "react-native";

import Container from "./Container";
import Command from "./Command";
import Title from "./Title";
import Result from "./Result";
import Size from "./Size";

import noteValues from "./noteValues.json";

/**
  flow ตอนนี้
  1. กด start
  2. เขย่าเก็บค่าแกน x ของ device
      2.1 ตรงนี้เราแบ่งเอาไว้ตามค่า x ที่ได้รับ เช่น -2 ให้แรนด้อมโน้ตตัวที่นี้ถึงนี้ 
  3. กด stop
  4. เล่น melody

  ส่ิงที่ต้องการ
  1. เลือก size -> โดนขนาดไซส์จะเป็นตัวกำหนดความยาวของเพลง [s: 3นาที, M: 5นาที, L: 7นาที] ตัวนี้จะไปลูปเอาทีหลัง
  1. กด start
  2. เขย่าเก็บค่าแกน x ของ device
      2.1 ตรงนี้เราแบ่งเอาไว้ตามค่า x ที่ได้รับ เช่น -2 ให้แรนด้อมโน้ตตัวที่นี้ถึงนี้ (ทำไว้แล้ว)
      2.2 โน๊ตในแต่ละความถี่จะเริ่มจาก C,D,E,F,G,A,B คือว่าถ้าเป็นไปได้ (อันนี้ extra) 
          2.2.1 เราอยากให้ความเร็วของการเขย่า มันมาส่งผลกับตัวนี้ เช่น 
                  - เขย่าเร็วมากให้ค่าที่แรนด้อมจาก 2.1 ไปลงที่ B
                  - เคลื่อนที่ข้าให้ค่าที่แรนด้อมจาก 2.1 ไปลงที่ C
                  - แล้วก็ไล่หลั่นกันมาตามความเร็วของการเขย่า
    
    ** อันนี้สรุปอีกรอบเผื่อ งง ตอนแรกเขย่าได้ค่า x = -2 เราจะไปแรนด้อมโน้ตจากช่อง 2 eg. C2, D2, ..., B2
    แล้วทีนี้ เราจะคิดต่อ โดยการเอาความเร็วมาคิดด้วย คือว่า ถ้าเร็วมาก เช่นความเร็ว = 8 เสียงก็จะแหลม ให้ไปใส่ ที่ B2
    ถ้าความเร็ว = 1 เสียงจะทุ้ม ให้กดไปที่โน้ต C2

  3. กด stop
  4. กด see result
  5. เล่น melody ความยาวของเพลงจะนานตาม size ที่เลือกไว้ในข้อ 1.
 */

const noteMapArray = Object.keys(noteValues).map((note) => ({
  note,
  freq: noteValues[note],
}));
const totalNote = noteMapArray.length;

function App() {
  const [size, setSize] = useState("");
  const [note, setNote] = useState(null);
  const [melody, setMelody] = useState([]);
  const [status, setStatus] = useState("stop");

  let acl = new Accelerometer({ frequency: 5 });
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
    acl.addEventListener("reading", () => {
      if (acl.x <= -2) {
        const pos = Math.floor(Math.random() * totalNote + 1);
        setNote(noteMapArray[pos].note);

        // ตัวโน๊ตจะแรนด้อมตามค่าที่ได้จากเซนเซ่อ
        if (acl.x > -3 && acl.x <= -2) {
          const pos = Math.floor(Math.random() * 51 + 35);
          if (note) setNote(noteMapArray[pos].note);

          // console.log(2222);
        } else if (acl.x > -4 && acl.x <= -3) {
          const pos = Math.floor(Math.random() * 68 + 52);
          // console.log("NOTE", note);

          if (note) setNote(noteMapArray[pos].note);

          // console.log(33333);
        } else if (acl.x > -5 && acl.x <= -4) {
          const pos = Math.floor(Math.random() * 85 + 69);
          // console.log("NOTE", note);

          if (note) setNote(noteMapArray[pos].note);

          // console.log(44444);
        } else if (acl.x > -6 && acl.x <= -5) {
          const pos = Math.floor(Math.random() * 102 + 86);
          // console.log("NOTE", note);

          if (note) setNote(noteMapArray[pos].note);

          // console.log(55555);
        } else if (acl.x > -7 && acl.x <= -6) {
          const pos = Math.floor(Math.random() * 119 + 103);
          // console.log("NOTE", note);

          if (note) setNote(noteMapArray[pos].note);

          // console.log(66666);
        } else if (acl.x > -8 && acl.x <= -7) {
          const pos = Math.floor(Math.random() * 137 + 120);
          // console.log("NOTE", note);

          if (note) setNote(noteMapArray[pos].note);

          // console.log(77777);
        } else {
          const pos = Math.floor(Math.random() * totalNote + 1);
          if (note) setNote(noteMapArray[pos].note);
        }
        console.log(acl.x, acl.y, acl.z);
      }
    });
    acl.start();
    setStatus("start");
  }

  function stopAccelerometer() {
    acl.stop();
    setStatus("stop");
    setNote(null);
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
      <Result melody={melody} status={status} size={size} />
    </Container>
  );
}

export default App;
