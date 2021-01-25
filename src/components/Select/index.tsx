import React, { SelectHTMLAttributes, useState } from 'react';
import './styles.css';

type RefReturn =
  | string
  | ((instance: HTMLSelectElement | null) => void)
  | React.RefObject<HTMLSelectElement>
  | null
  | undefined;

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, register, required, name, options, ...rest }) => {
  const [value, setValue] = useState('')

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select name={name} ref={register({ required })} onChange={(e) => setValue(e.target.value)} value={value} id={name} {...rest}>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  );
}

export default Select;
