import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

export default function Result({ result, melody, status }) {

  useEffect(() => {
    if (status === 'stop') {
      console.log('melody', melody);
      const now = Tone.now()

      // loop melody
      const synthA = new Tone.FMSynth().toDestination();
      const synthB = new Tone.AMSynth().toDestination();
      const loopA = new Tone.Loop(time => {
        for (let i = 0; i < melody.length; i++) {
          const note = melody[i]
          const t = i === 0 ? time : time + (i - 0.85)
          console.log('note', note, 'time', t)
          synth.triggerAttackRelease(note, "8n", t);
        }
      }, "4n").start(0);
      Tone.Transport.start()
      Tone.Transport.bpm.rampTo(200, 3);

      // stop the loop
      setTimeout(() => {
        Tone.Transport.stop();
      }, 5000);


    }
  }, [melody, status])

  useEffect(() => {

  }, [])



  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        hear&nbsp;
      <Text style={styles.command}
        >Result&nbsp;
      </Text>
        here
    </Text>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24
  },
  command: {
    fontSize: 30,
    color: "#7DF9FF",
    textShadowColor: "#7DF9FF",
    cursor: "pointer",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 20
  },
  description: {
    fontSize: 20,
    color: "#7fff00",
    textShadowColor: "#7fff00",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20
  },
  value: {
    color: "white",
    fontFamily: "Monoton",
    textShadowColor: "#FF00DE",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 30,
    marginBottom: 16,
    textAlign: "center",
  }
};
