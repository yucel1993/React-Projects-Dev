import React from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const Alan = () => {
  useEffect(() => {
    alanBtn({
      key: "d04f20f5cf0d9278af35fbd741bd43c52e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
  return <div>Alan</div>;
};

export default Alan;
