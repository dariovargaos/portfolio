import { Link as RouterLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="space-evenly"
      bg="#22C35E"
      color="white"
      h="100%"
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
      <Link as={RouterLink} to="/">
        About ME
      </Link>
      <Link as={RouterLink} to="/portfolio">
        Portfolio
      </Link>
      <Link as={RouterLink} to="/resume">
        Resume
      </Link>
      <Link as={RouterLink} to="/contact">
        Contact
      </Link>
      <Button onClick={() => navigate("/contact")}>Hire me</Button>
    </Flex>
  );
}
