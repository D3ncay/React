import React, {useState} from "react";

const MySelect = ({ options, defaultValue, onChange }) => {

    const [selected, setSelected] = useState('');

  return (
    <div>
      <select onChange={e => setSelected(e.target.value)}>
        <option selected value="" disabled>
          {defaultValue}
        </option>
        {options.map((option) => 
          <option  value={option.value} key={option.value}>
            {option.name}
          </option>
        )}
      </select>
    </div>
  );
};

export default MySelect;
