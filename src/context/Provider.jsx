import Context from "./Context";
import { useState } from "react";

const misDatos=[];

const Provider = ({ children }) => {
    const [etapas, setEtapas] = useState(0);
    return (
        <Context.Provider value={{
            etapas,
            setEtapas,
            misDatos
        }}>
            {children}

        </Context.Provider>
    )
};
export default Provider;