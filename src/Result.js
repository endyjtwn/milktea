import React, { useEffect } from "react";
import { View, Text } from "react-native";

import * as Tone from "tone";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

function getDurationFromSize(size) {
  const minute = 60 * 1000;
  if (size === "small") {
    return 5 * minute;
  } else if (size === "medium") {
    return 10 * minute;
  } else if (size === "large") {
    return 15 * minute;
  } else {
    return 5000; // 5s
  }
}

export default function Result({ melody, status, size, waitAccelerometer }) {
  useEffect(() => {
    if (status === "stop") {
      const duration = getDurationFromSize(size);
      setTimeout(() => {
        console.log(`${duration / 1000}s passed, going to stop now.`);
        Tone.Transport.stop();
      }, duration);
    }
  }, [status, size]);

  useEffect(() => {
    if (status === "stop" && melody.length > 0) {
      new Tone.Sequence((time, note) => {
        synth.triggerAttackRelease(note, 0.1, time);
      }, melody).start(0);

      console.log("start playing this melody", melody);
      Tone.Transport.start();
    }
  }, [melody, status]);

  useEffect(() => {
    if (status === "stop" && melody.length > 0) {
      const seq = new Tone.Sequence((time, note) => {
        synth.triggerAttackRelease(note, 0.1, time);
      }, ["C3", "D2", ["D3", "E3"], "C3", "D3", "C1", "D1", ["D1", "E1"], "D3", "E1", "F2", "F2",
          ["C3", "D3"], "D3", "C1", "D1", "D1", "E2", "F2", "F2", ["C2", "D2"], "D2"]).start(0);
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
  }, [melody, status]);

  return (

    <View style={styles.container}>
      {
        status === "stop" ?
          <Text style={styles.command} onClick={waitAccelerometer}>Reset</Text>
          : null
      }

    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  command: {
    fontSize: 30,
    color: "#7DF9FF",
    textShadowColor: "#7DF9FF",
    cursor: "pointer",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 20,
  },
  description: {
    fontSize: 20,
    color: "#7fff00",
    textShadowColor: "#7fff00",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  },
  value: {
    color: "white",
    fontFamily: "Monoton",
    textShadowColor: "#FF00DE",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 30,
    marginBottom: 16,
    textAlign: "center",
  },
};
