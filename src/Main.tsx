import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import Providers from "./components/Providers";
import theme from "./theme/theme";

export const Main = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Providers>
        <h2>Hello from React!</h2>
      </Providers>
    </>
  );
};
