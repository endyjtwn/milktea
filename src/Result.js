import React, { useEffect } from "react";
import { View, Text } from "react-native";

import * as Tone from "tone";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Adjust time that you want melody to stop here.
function getDurationFromSize(size) {
  const minute = 60 * 1000;
  if (size === "small") {
    return 5 * minute;
  } else if (size === "medium") {
    return 10 * minute;
  } else if (size === "large") {
    return 15 * minute;
  } else {
    // Default duration when user not select any options.
    return 5000; // 5s
  }
}

export default function Result({ melody, status, size }) {
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

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        hear&nbsp;
        <Text style={styles.command}>Result&nbsp;</Text>
        {melody}
      </Text>
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
