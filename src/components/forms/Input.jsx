import React from 'react'

export default function Input({
    type,
    name,
    value,
    id,
    placeholder,
    className,
    onChange,
    onBlur,
    require
}) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            id={id}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            onBlur={onBlur}
            require={require}
        />
    )
}
