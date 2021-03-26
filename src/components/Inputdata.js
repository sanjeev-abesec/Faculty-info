import React from 'react';

const Inputdata = (props) => {
    const {placeholder = "Enter placeholder text", value, onChange, type = "text", name} = props;
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className="form-control"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Inputdata
