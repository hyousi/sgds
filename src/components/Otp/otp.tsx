import { createContext, useCallback, useState } from "react";

enum Status {
  idle,
  unverified,
  verified
}

interface OtpProps {
  sendOtp: (value: string) => Promise<void> | void;
  verify: (value: string) => Promise<void> | void;
  children: (status: Status) => React.ReactNode;
}

interface IOtpContext {
  status: Status;
  verify: (value: string) => Promise<void> | void;
  sendOtp: (value: string) => Promise<void> | void;
}

export const OtpContext = createContext<IOtpContext>({
  status: Status.idle,
  verify: () => {},
  sendOtp: () => {}
});

function Otp(props: OtpProps) {
  const [status, setStatus] = useState(Status.idle);

  const handleSendOtp = useCallback(
    async (value: string) => {
      await props.sendOtp(value);
      setStatus(Status.unverified);
    },
    [props]
  );

  const handleVerify = useCallback(
    async (value: string) => {
      await props.verify(value);
      setStatus(Status.verified);
    },
    [props]
  );

  return (
    <OtpContext.Provider
      value={{ status, sendOtp: handleSendOtp, verify: handleVerify }}
    >
      {props.children(status)}
    </OtpContext.Provider>
  );
}

export default Otp;
