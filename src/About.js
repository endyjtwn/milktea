import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { useMediaQuery } from "react-responsive";

export default function About() {
    const isSmallMobile = useMediaQuery({ query: "(max-width: 600px)" });
    const [isPress, setIsPress] = useState(false);


    const styles = {

        container: {
            flexDirection: isSmallMobile ? "column" : "row",
            marginTop: "1rem",
            marginBottom: "1rem",
            alignItems: "center",
            justifyContent: isSmallMobile ? "space-around" : "center",
            height: "auto"
        },

        about: {
            fontSize: 30,
            color: "#888888",
            textShadowColor: "#7DF9FF",
            fontFamily: "Orbitron",
            textShadowOffset: { width: -2, height: 2 },
            textShadowRadius: 30,
            cursor: "pointer",
            borderRadius: "1rem",
            padding: "0.5rem",
            right: 0,
            top: 0,
            position: "fixed"
        },

        show: {
            background: "#ffffff",
            height: "auto",
            padding: "1rem",
            top: "3rem",
            right: "1rem",
            maxWidth: "300px",
            position: "fixed",
            borderRadius: "10%"
        }
    };


    function touchProps() {
        isPress ? setIsPress(false) : setIsPress(true);
    }

    return (
        <View style={styles.container} >
            <Text style={styles.about} onClick={touchProps}>?</Text>
            {isPress ? <Text style={styles.show}>
                The project that assembles the variety shaking movement while making a tasty milk tea.🥤
                Using a simple sensor called an accelerometer, it collects a variety of data from the mobile phone,
                then uses this information to generate a music from that delicious milk tea.🤩
                <br />
                <br />
                1. select the size of the cup <br />
                2. press start <br />
                3. shake <br />
                4. press stop <br />
                5. enjoy! 🎶
                <br />
                <br />
                contact: jatawan@uni-bremen.de 👈
            </Text > : null}
        </View >
    );
}

