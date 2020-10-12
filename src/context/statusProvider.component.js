import React, { useState } from "react";
import StatusContext from "./status.context";

const ColorProvider = ({ children }) => {

    const setLoaded = (value) => {
        setStatus(prevState => {
            return {
                ...prevState,
                isLoaded: value
            };
        });
    };

    const initialState = {
        isLoaded:false,
        setLoaded,
    };

    const [status, setStatus] = useState(initialState);

    return (
        <StatusContext.Provider value={status}>
            {children}
        </StatusContext.Provider>
    );
};

export default ColorProvider;