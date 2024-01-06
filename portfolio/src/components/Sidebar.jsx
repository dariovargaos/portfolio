import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaUser,
  FaLaptopCode,
  FaLocationArrow,
} from "react-icons/fa";
import { IoDocumentText, IoMail } from "react-icons/io5";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="space-evenly"
      bg="green.500"
      color="white"
      p={3}
      minH="100vh"
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
      <HStack spacing={4}>
        <Link
          as={RouterNavLink}
          to="https://www.linkedin.com/in/dario-varga/"
          target="_blank"
        >
          <Icon as={FaLinkedin} boxSize={7} />
        </Link>

        <Link
          as={RouterNavLink}
          to="https://github.com/dariovargaos"
          target="_blank"
        >
          <Icon as={FaGithub} boxSize={7} />
        </Link>
        <Link
          as={RouterNavLink}
          to="https://www.facebook.com/dario.varga.1/"
          target="_blank"
        >
          <Icon as={FaFacebook} boxSize={7} />
        </Link>
        <Link
          as={RouterNavLink}
          to="https://www.instagram.com/dario.varga/"
          target="_blank"
        >
          <Icon as={FaInstagram} boxSize={7} />
        </Link>
      </HStack>

      <Link
        as={RouterNavLink}
        to="/"
        _hover={{ color: "green" }}
        _activeLink={{ color: "green" }}
      >
        <Flex align="center">
          <Icon as={FaUser} mr={2} />
          About Me
        </Flex>
      </Link>

      <Link
        as={RouterNavLink}
        to="/portfolio"
        _hover={{ color: "green" }}
        _activeLink={{ color: "green" }}
      >
        <Flex align="center">
          <Icon as={FaLaptopCode} mr={2} />
          Portfolio
        </Flex>
      </Link>
      <Link
        as={RouterNavLink}
        to="/resume"
        _hover={{ color: "green" }}
        _activeLink={{ color: "green" }}
      >
        <Flex align="center">
          <Icon as={IoDocumentText} mr={2} />
          Resume
        </Flex>
      </Link>
      <Link
        as={RouterNavLink}
        to="/contact"
        _hover={{ color: "green" }}
        _activeLink={{ color: "green" }}
      >
        <Flex align="center">
          <Icon as={IoMail} mr={2} />
          Contact
        </Flex>
      </Link>
      <Button
        onClick={() => navigate("/contact")}
        leftIcon={<FaLocationArrow />}
        backgroundColor="green.300"
      >
        Hire me
      </Button>
    </Flex>
  );
}
