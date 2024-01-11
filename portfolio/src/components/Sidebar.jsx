import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";

//icons
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaUser,
  FaLaptopCode,
} from "react-icons/fa";
import { IoDocumentText, IoMail } from "react-icons/io5";
import { HamburgerIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <Flex
      flexDir="column"
      align={isSmallScreen ? "" : "center"}
      justify="space-evenly"
      bg="green.500"
      color="white"
      p={3}
      minH={isSmallScreen ? "" : "100vh"}
    >
      <Flex
        justify={isSmallScreen ? "space-evenly" : ""}
        align={isSmallScreen ? "center" : ""}
      >
        {isSmallScreen && (
          <>
            <Link
              as={RouterNavLink}
              to="/"
              _hover={{ color: "green" }}
              _activeLink={{ color: "green" }}
            >
              <Flex flexDir="column" align="center">
                <Icon as={FaUser} />
                About Me
              </Flex>
            </Link>

            <Link
              as={RouterNavLink}
              to="/portfolio"
              _hover={{ color: "green" }}
              _activeLink={{ color: "green" }}
            >
              <Flex flexDir="column" align="center">
                <Icon as={FaLaptopCode} />
                Portfolio
              </Flex>
            </Link>
            <Link
              as={RouterNavLink}
              to="/resume"
              _hover={{ color: "green" }}
              _activeLink={{ color: "green" }}
            >
              <Flex flexDir="column" align="center">
                <Icon as={IoDocumentText} />
                Resume
              </Flex>
            </Link>
            <Link
              as={RouterNavLink}
              to="/contact"
              _hover={{ color: "green" }}
              _activeLink={{ color: "green" }}
            >
              <Flex flexDir="column" align="center">
                <Icon as={IoMail} />
                Contact
              </Flex>
            </Link>

            <Button onClick={() => setIsOpen(true)} size="sm">
              <ArrowLeftIcon />
            </Button>
          </>
        )}
        {!isSmallScreen && <Heading size="lg">Dario Varga</Heading>}
      </Flex>
      {isSmallScreen && (
        <Drawer isOpen={isOpen} placement="right" onClose={toggleDrawer}>
          <DrawerContent bg="green.500" color="white" p={3}>
            <DrawerCloseButton />
            <DrawerBody display="flex" flexDir="column" gap={3}>
              <Flex flexDir="column" align="center" gap={5}>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
                <Text>
                  Hi, my name is Dario Varga and I&apos;m a junior frontend
                  developer. Welcome to my personal website!
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
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
      {!isSmallScreen && (
        <>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Text>
            Hi, my name is Dario Varga and I&apos;m a junior frontend developer.
            Welcome to my personal website!
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
        </>
      )}
    </Flex>
  );
}
