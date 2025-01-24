import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({children}) => {
    
    
    const [data, setData] = useState({
        fname: "",
        email: "",
        genreInputData: ["", "", "", "", ""],
        descInputData: "",
        chosenIndices: [0, 0, 0]
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setData((oldData) => ({
            ...oldData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    return (
        <FormContext.Provider value={{data, setData, handleChange }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
