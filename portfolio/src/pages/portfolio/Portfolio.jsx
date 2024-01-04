import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        gap={5}
        bg="#FAFAFA"
        minH="200px"
      >
        <Heading color="black" fontWeight="bold">
          Portfolio
        </Heading>
        <Text>Want some help building your software?</Text>
        <Button>Hire me</Button>
      </Flex>

      <Flex flexDir="column" p={8} gap={4}>
        <Heading borderLeft="5px solid #54B689" size="md">
          My Projects
        </Heading>
        <Text>Ovdje ide grid sa slikama projekata i pojasnjenjima</Text>
      </Flex>
    </Box>
  );
}
