import React, { Fragment } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputNumberProps {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputNumber: React.FC<InputNumberProps> = ({
  phone,
  setPhone,
  error,
}) => {
  return (
    <Fragment>
      <div className="flex flex-col items-center mt-16 font-sans">
        <form className="flex flex-col items-center w-full max-w-xs">
          <PhoneInput
            country={"ir"}
            value={phone}
            onChange={(value: string) => setPhone(value)}
            inputStyle={{
              width: "100%",
              height: "2.5rem",
              fontWeight: "400",
              fontSize: "1.5rem",
              paddingLeft: "1px",
              borderRadius: "none",
              border: "none",
              borderBottom: error ? "1px solid #F54135 " : "1px solid #D8DADC",
            }}
            placeholder="000-000-000-00"
            buttonStyle={{
              border: "none",
              display: "none",
              backgroundColor: "transparent",
            }}
            dropdownStyle={{
              width: "100vh",
              border: "none",
              fontSize: "0.875rem",
            }}
          />
          {error && (
            <span className="font-normal text-base leading-5 mt-5 text-[#F54135]">
              Please enter a valid phone number
            </span>
          )}
        </form>
      </div>
    </Fragment>
  );
};

export default InputNumber;
