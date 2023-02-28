import React from "react";

type TVariant = "input" | "textarea";

type TTextInputProps = {
  label: string;
  errorMessage?: string;
  isDisabled?: boolean;
  onChange?: any;
  value?: string;
  placeholder?: string;
  variant?: TVariant;
  className?: string;
};

export const TextInput = ({
  label,
  isDisabled = false,
  onChange,
  value,
  placeholder,
  variant = "input",
  className,
}: TTextInputProps) => {
  return (
    <>
      <div className={className}>
        <div className="ml-4 px-2 absolute -mt-4">
          <h1 className=" bg-light px-2 text-dark-100 text-opacity-70 ">
            {label}
          </h1>
        </div>

        {variant === "input" ? (
          <input
            className={`rounded-sm h-10 w-80 border outline-none border-dark-100 border-opacity-30 focus:border-primary bg-transparent z-0 text-dark-100 px-4`}
            disabled={isDisabled}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            autoCapitalize="none"
          />
        ) : (
          <textarea
            className={`rounded-sm w-80 border outline-none border-dark-100 border-opacity-30 focus:border-primary bg-transparent z-0 text-dark-100 px-4 h-32 py-4`}
            disabled={isDisabled}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            autoCapitalize="none"
          />
        )}
      </div>
    </>
  );
};
