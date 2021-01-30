import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now()

export default function Result({ result, note, status }) {
  useEffect(() => {
    if (!note || status === 'stop') {
      return
    }
    console.log('note', note)
    synth.triggerAttackRelease(note, now);
  }, [note])

  return (
    <h2 style={styles.value}>
      {note && `Playing note: ${note}`}
    </h2>
  );
}

const styles = {
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
