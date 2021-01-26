import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  Chord,
  Scale,
  noteToFrequency,
  objectToNote,
  createChord,
  createScale,
  noteToObject,
  createMelody
} from 'music-fns';
import Oscillator from "./useCreateOscillator";

import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now()

export default function Result({ result, note }) {
  useEffect(() => {
    if (!note) {
      return
    }
    console.log('note', note)
    synth.triggerAttackRelease(note, now);
  }, [note])

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        See&nbsp;
        <Text style={styles.command}
        >Result&nbsp;
        </Text>
        here
      </Text>
      {/* {
        result !== "" ?
          createChord(note, Chord.MAJOR)
            .map(frequency => (
              <Oscillator
                frequency={noteToFrequency(frequency)}
                type={"triangle"}
                key={frequency}
              />
            ))
          : null
      } */}
      <Text style={styles.value}>{result}</Text>
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
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Orbitron",
    position: "absolute",
    top: "4rem",
    width: "100%"
  }
};
