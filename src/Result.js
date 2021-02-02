import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

export default function Result({ result, melody, status }) {

  useEffect(() => {
    if (status === 'stop') {
      console.log('melody', melody);
      const now = Tone.now()

      // const synth = new Tone.Synth().toDestination();
      // const seq = new Tone.Sequence((time, note) => {
      //   synth.triggerAttackRelease(note, 0.5, time);
      //   // subdivisions are given as subarrays
      // }, ["C3", "D3", "E3", "F3", "G3", "E3", "D3", "D3", "D3", "E3", "F3", "F3"]).start(0)
      // Tone.Transport.start();
      // Tone.Transport.stop(10);

      for (let i = 0; i < melody.length; i++) {
        const note = melody[i]
        const t = i === 0 ? now : now + (i - 0.5)
        console.log('note', note, 'time', t / 10)
        synth.triggerAttackRelease(note, "8n", now + t / 3);
      }

    }
  }, [melody, status])

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        hear&nbsp;
      <Text style={styles.command}
        >Result&nbsp;
      </Text>
        {melody}
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
