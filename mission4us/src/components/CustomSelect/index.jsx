import React from 'react';
import Select from 'react-select';


const CustomSelect = ({ onChange, options, value, className, placeholder,styles }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };

    return (
        <div className={className}>
            <Select
                value={defaultValue(options, value)}
                onChange={value => {
                    onChange(value)

                }} options={options} 
                placeholder={placeholder}
                theme={(theme) => ({
                    ...theme,
                    
                    colors: {
                      ...theme.colors,
                     
                      primary: '#237a57',
                     
                    },
                    
                  })}
                />
        </div>

    )
}

export default CustomSelect