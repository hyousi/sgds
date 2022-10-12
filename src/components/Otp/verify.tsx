import { useContext, useState } from "react";
import { OtpContext } from "./otp";

function Verify() {
  const { verify } = useContext(OtpContext);
  const [value, setValue] = useState("");

  return (
    <div style={{ flexDirection: "row" }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => verify(value)}>Verify</button>
    </div>
  );
}

export default Verify;
