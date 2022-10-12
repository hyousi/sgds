import { useContext, useState } from "react";
import { OtpContext } from "./otp";

function Input() {
  const { sendOtp } = useContext(OtpContext);
  const [value, setValue] = useState("");

  return (
    <div style={{ flexDirection: "row" }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => sendOtp(value)}>Send Otp</button>
    </div>
  );
}

export default Input;
