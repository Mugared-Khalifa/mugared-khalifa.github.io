import React from "react";
import Typewriter from "typewriter-effect";
import Emoji from "react-emoji-render";


function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Developer 💻',
          "Machine Learning Engineer " + String.fromCodePoint( 0x1F4CA),
          "Embedded Systems Engineer 🤖"
        ],
        autoStart: true,
        delay: 30,
        pauseFor:2000,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
