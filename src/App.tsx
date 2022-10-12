import { ThemeProvider } from "@emotion/react";
import { Box, Button } from "./components";
import theme from "./theme";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Box color="#cae" bg="blue" pt={2}>
          Tomato
        </Box>
        <Button outline={true}>Primary</Button>
        <h2>Start editing to see some magic happen!</h2>

        <section>
          <h3>Otp</h3>
        </section>
      </div>
    </ThemeProvider>
  );
}
