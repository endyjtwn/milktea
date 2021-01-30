import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

export default function Result({ result, melody, status }) {
  useEffect(() => {
    if (status === 'stop') {
      console.log('melody', melody);
      const now = Tone.now()

      for (let i = 0; i < melody.length; i++) {
        const note = melody[i]
        const t = i === 0 ? now : now + (i - 0.85)
        console.log('note', note, 'time', t)
        synth.triggerAttackRelease(note, "8n", t);

      }
    }
  }, [melody, status])

  useEffect(() => {
    const now = Tone.now()

    for (const o of [{ note: "C4", t: now }, { note: "E4", t: now + 0.5 }]) {
      console.log(o.note, o.t)
      synth.triggerAttackRelease(o.note, "8n", o.t)
      // synth.triggerAttackRelease(note, "8n", now + 0.5)
      // synth.triggerAttackRelease(note, "8n", now + 1)
    }



    // synth.triggerAttackRelease(["C4", "E4", "G4"], "8n", now)
    // synth.triggerAttackRelease("E4", "8n", now + 0.5)
    // synth.triggerAttackRelease("G4", "8n", now + 1)

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
