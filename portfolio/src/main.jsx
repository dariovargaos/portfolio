import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { LanguageProvider } from "./context/LanguageContext.jsx";

//languages
import global_en from "./translations/en/global.json";
import global_cro from "./translations/cro/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    cro: {
      global: global_cro,
    },
  },
});

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  backgroundColor: {
    light: "none",
    dark: "none",
  },
};

const customTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        backgroundColor: "#38A169",
        color: "white",
        _hover: {
          backgroundColor: "#2E8B57",
        },
      },
      variants: {
        base: {},
      },
      defaultProps: {
        variant: "base",
      },
    },
  },
  config,
  colors,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18next}>
          <LanguageProvider>
            <ColorModeScript
              initialColorMode={customTheme.config.initialColorMode}
            />
            <App />
          </LanguageProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
