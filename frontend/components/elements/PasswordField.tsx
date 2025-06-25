import { useState, ChangeEvent } from "react";

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder: string;
}

const PasswordField = ({
  label,
  value,
  onChange,
  error,
  placeholder
}: PasswordFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative max-w-[300px]">
      <label className="mb-1 block font-medium">{label}</label>
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full max-w-[300px] rounded border px-3 py-2 pr-16 ${
          error ? "border-red-400 bg-[#FFEBEE]" : "border-gray-300"
        }`}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-[35px] text-xs text-blue-600"
      >
        {show ? "Hide" : "Show"}
      </button>
      {error && <p className="mt-1 text-[11px] text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordField;
