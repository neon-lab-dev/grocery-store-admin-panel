import React from "react";

interface appFormError {
    message?: String,
    className?: String,

}


const AppFormErrorLine: React.FC<appFormError> = ({ message, className = "" }) => {
    return (
        <span className={`text-error-300 text-xs md:text-sm ${className}`}>
            {message}
        </span>
    );
};

export default AppFormErrorLine;