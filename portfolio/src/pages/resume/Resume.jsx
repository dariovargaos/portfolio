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
          Online Resume
        </Heading>
        <Button>Download PDF Version</Button>
      </Flex>

      <Flex flexDir="column" p={8} gap={4}>
        <Heading>Ovdje ide cijeli CV</Heading>
      </Flex>
    </Box>
  );
}
