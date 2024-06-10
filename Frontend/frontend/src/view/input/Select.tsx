import React from "react";

interface SelectProps {
    id: string;
    className: string;
    options: { value: string, label: string }[];
}
export function Select({id,className,options}: SelectProps) {
    return (
        <>
            <select className={`text-[1.3vw] mb-2 h-6 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 ${className}`}
                    id={id}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}