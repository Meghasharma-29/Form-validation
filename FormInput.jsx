import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
    const { label, onChange, errorMessage, Id, ...inputprops } = props;
    const [focused, setFocused] = useState(false);
    
    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">

            <label>{label}</label>
            <input {...inputprops}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputprops.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )

}



export default FormInput;