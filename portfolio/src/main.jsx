import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
