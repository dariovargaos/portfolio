import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="space-evenly"
      bg="#54B689"
      minH="100vh"
      color="white"
      p={3}
    >
      <Heading size="lg">Dario Varga</Heading>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Text>
        Hi, my name is Dario Varga and I'm a junior frontend developer. Welcome
        to my personal website!
      </Text>
      <Stack dir="row">IKOnice ZA MREŽE</Stack>
      <Link>About ME</Link>
      <Link>Portfolio</Link>
      <Link>Resume</Link>
      <Link>Contact</Link>
      <Button>Hire me</Button>
    </Flex>
  );
}
