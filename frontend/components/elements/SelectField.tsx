import Select from "react-select";

export interface OptionType {
  value: number;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options: OptionType[];
  value: OptionType | undefined;
  onChange: (option: OptionType | null) => void;
  error?: string;
  placeholder?: string;
}

const SelectField = ({
  label,
  options,
  value,
  onChange,
  error,
  placeholder,
}: SelectFieldProps) => (
  <div className="relative max-w-[300px]">
    <label className="mb-1 block font-medium">{label}</label>
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isClearable
      
    />
    {error && <p className="mt-1 text-[11px] text-red-500 ">{error}</p>}
  </div>
);

export default SelectField;