import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.css'

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: ({ required }: { required?: boolean }) => RefReturn;
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, register, required, ...rest }) => {
  return (
    <div className={styles.input_block}>
      <label htmlFor={name}>{label}</label>
      <input name={name} ref={register({ required })} type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;
