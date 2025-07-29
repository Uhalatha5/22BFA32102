import React from "react";
const withLogger = (Component) => {
    return (props) => {
        console.log(`[Logger] Rendering: ${Component.name}`);
        console.log("Props:", props);
        return React.createElement(Component, props);
    };
};

export default withLogger;
