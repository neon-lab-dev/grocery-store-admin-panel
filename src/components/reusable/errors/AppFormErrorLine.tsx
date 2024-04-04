import React from "react";

interface AppFormError {
    message: String,
    className?: String
}

const AppFormErrorLine: React.FC<AppFormError> = ({ message, className = "" }) => {
    return (
        <span className={`text-error font-medium text-xs md:text-sm ${className}`}>
            {message}
        </span>
    );
};

export default AppFormErrorLine;