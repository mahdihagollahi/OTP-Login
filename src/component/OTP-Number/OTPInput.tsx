import React, { Fragment, useState } from 'react';
import OtpInput from 'react-otp-input';

interface OTPInputProps {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}

const OTPInput: React.FC<OTPInputProps> = ({ error, setError, otp, setOtp }) => {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setOtp(value);
    setError(false); 

    if (value === "25017") {
      setIsLoginSuccessful(true);
    } else {
      setIsLoginSuccessful(false);
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center sm:justify-center md:justify-center xs:justify-center">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={5}
          isInputNum
          containerStyle={{ display: 'flex', gap: '8px' }}
          inputStyle={{
            width: '63px',
            height: '72px',
            fontSize: '20px',
            borderRadius: '15px',
            border: `2px solid ${error ? 'red' : isLoginSuccessful ? 'green' : '#D8DADC'}`,
          }}
          focusStyle={{ border: `2px solid ${error ? 'red' : isLoginSuccessful ? 'green' : '#000000'}`, outline: '#000000' }}
        />
        {error && <p className="text-red-500 mt-4">Wrong code, please try again</p>}
     
      </div>
    </Fragment>
  );
};

export default OTPInput;
