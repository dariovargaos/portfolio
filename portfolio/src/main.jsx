import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18next}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
