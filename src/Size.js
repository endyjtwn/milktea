import React, { useState } from "react";
import { View, Text } from "react-native";

export default function Size({ size, handleAddrTypeChange }) {

    const Add = size.map(Add => Add)

    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                Select:&nbsp;
                <select onChange={e => handleAddrTypeChange(e)} style={styles.command}>
                    {
                        Add.map((size, key) => <option value={key}>{size}</option>)
                    }
                </select>
            </Text>
        </View >
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
        color: "#000000",
        textShadowColor: "#7DF9FF",
        cursor: "pointer",
        fontFamily: "Orbitron",
        border: "1px solid",
        borderRadius: ".5rem",
        paddingLeft: "5px",
        paddingRight: "5px",
        marginRight: ".5rem",

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
