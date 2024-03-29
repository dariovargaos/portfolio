import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

//components
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" h="100vh" overflow="hidden">
      <GridItem as="aside" colSpan={{ base: 6, lg: 1, xl: 1 }}>
        <Sidebar />
      </GridItem>

      <GridItem as="main" colSpan={{ base: 6, lg: 5, xl: 5 }} overflowY="auto">
        <Outlet />
      </GridItem>
    </Grid>
  );
}
