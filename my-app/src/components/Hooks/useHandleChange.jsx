import { useState } from "react"

export default function useHandleChange(initialValues) {
    const [values, setValues] = useState({initialValues})

    const handleInputChange = (event) => {
        const type = event.target.type
        setValues({
            ...values,
            [event.target.name]: type === "checkbox" ? event.target.checked : event.target.value,
        })
    }

    return {
        handleInputChange,
        values,
    }
}