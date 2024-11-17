import React from "react";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <div className="checkbox flex items-center space-x-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="form-checkbox h-4 w-4 text-blue-500"
            />
            <span>{label}</span>
        </div>
    );
};

export default Checkbox;