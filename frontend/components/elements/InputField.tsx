import React from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  styles?: string;
  maxLength?: number;
  pattern?: string;
}

const InputField: React.FC<InputProps> = ({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
  styles,
}) => (
  <div>
    <label className="mb-1 block font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles}
    />
    {error && <p className="mt-1 text-[11px] text-red-500">{error}</p>}
  </div>
);

export default InputField;
