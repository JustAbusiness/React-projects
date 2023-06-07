const { createContext, useContext } = require("react");
const { default: useToggle } = require("./UseToggle");

const AccordianContext = createContext();
function AccordianProvider(props) {
    const { value: show, handleToggleValue } = useToggle();
    const values = { show, handleToggleValue }

    return <AccordianContext.Provider value={values} {...props}></AccordianContext.Provider>
}

function useAccordian() {
    const context = useContext(AccordianContext);
    if (typeof context === 'undefined') throw new Error("useAccordian must be used within AccordianProvider");
    return context;
}

export { useAccordian, AccordianProvider }