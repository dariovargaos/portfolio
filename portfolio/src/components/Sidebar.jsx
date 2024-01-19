import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import {
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Divider,
  Switch,
  VStack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
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
import { ArrowLeftIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BsLinkedin } from "react-icons/bs";

export default function Sidebar() {
  const { t } = useTranslation("global");
  const { language, changeLanguage } = useLanguage();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });

  //custom component styles
  const sidebarBg = useColorModeValue("green.500", "#1E2A3A");

  const hoverBgLightBtn = "#2E8B57";
  const hoverBgDarkBtn = "#1A202C";
  const hoverBg = useColorModeValue(hoverBgLightBtn, hoverBgDarkBtn);

  const navlinkColors = {
    hoverLight: "#004830",
    hoverDark: "#38A169",
    activeLight: "#004830",
    activeDark: "#38A169",
  };
  const navlinkHover = useColorModeValue(
    navlinkColors.hoverLight,
    navlinkColors.hoverDark
  );
  const navlinkActive = useColorModeValue(
    navlinkColors.activeLight,
    navlinkColors.activeDark
  );

  const linkStyle = {
    _hover: {
      color: navlinkHover,
    },
    _activeLink: { color: navlinkActive },
    color: "#DDF0E7",
  };

  const iconStyle = {
    boxSize: 7,
    _hover: { color: "#F2F3F5" },
  };

  return (
    <Flex
      flexDir="column"
      align={isSmallScreen ? "" : "center"}
      justify="space-evenly"
      bg={sidebarBg}
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
            <Link as={RouterNavLink} to="/" sx={{ ...linkStyle }}>
              <Flex flexDir="column" align="center">
                <Icon as={FaUser} />
                {t("sidebar.pages.aboutMe")}
              </Flex>
            </Link>

            <Link as={RouterNavLink} to="/portfolio" sx={{ ...linkStyle }}>
              <Flex flexDir="column" align="center">
                <Icon as={FaLaptopCode} />
                {t("sidebar.pages.portfolio")}
              </Flex>
            </Link>
            <Link as={RouterNavLink} to="/resume" sx={{ ...linkStyle }}>
              <Flex flexDir="column" align="center">
                <Icon as={IoDocumentText} />
                {t("sidebar.pages.resume")}
              </Flex>
            </Link>
            <Link as={RouterNavLink} to="/contact" sx={{ ...linkStyle }}>
              <Flex flexDir="column" align="center">
                <Icon as={IoMail} />
                {t("sidebar.pages.contact")}
              </Flex>
            </Link>

            <Button
              onClick={() => setIsOpen(true)}
              size="sm"
              bg={
                colorMode === "dark"
                  ? "backgroundColor.light"
                  : "backgroundColor.dark"
              }
              _hover={{ bg: hoverBg }}
            >
              <ArrowLeftIcon />
            </Button>
          </>
        )}
        {!isSmallScreen && (
          <Flex flexDir="column" align="center" gap={3}>
            <Flex gap={3}>
              <Button
                onClick={() => changeLanguage("en")}
                fontWeight={language === "en" ? "bold" : "400"}
                bg={
                  colorMode === "dark"
                    ? "backgroundColor.light"
                    : "backgroundColor.dark"
                }
                _hover={{ bg: hoverBg }}
              >
                ENG
              </Button>
              <Divider orientation="vertical" />
              <Button
                onClick={() => changeLanguage("cro")}
                fontWeight={language === "cro" ? "bold" : "400"}
                bg={
                  colorMode === "dark"
                    ? "backgroundColor.light"
                    : "backgroundColor.dark"
                }
                _hover={{ bg: hoverBg }}
              >
                HRV
              </Button>
            </Flex>

            <Heading size="lg">Dario Varga</Heading>
          </Flex>
        )}
      </Flex>
      {isSmallScreen && (
        <Drawer isOpen={isOpen} placement="right" onClose={toggleDrawer}>
          <DrawerContent bg={sidebarBg} color="white" p={3}>
            <DrawerCloseButton />
            <DrawerBody display="flex" flexDir="column" gap={3}>
              <Flex flexDir="column" align="center" gap={5}>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
                <Text>{t("sidebar.aboutMe")}</Text>
                <HStack spacing={4}>
                  <Link
                    as={RouterNavLink}
                    to="https://www.linkedin.com/in/dario-varga/"
                    target="_blank"
                  >
                    <Icon as={FaLinkedin} sx={{ ...iconStyle }} />
                  </Link>

                  <Link
                    as={RouterNavLink}
                    to="https://github.com/dariovargaos"
                    target="_blank"
                  >
                    <Icon as={FaGithub} sx={{ ...iconStyle }} />
                  </Link>
                  <Link
                    as={RouterNavLink}
                    to="https://www.facebook.com/dario.varga.1/"
                    target="_blank"
                  >
                    <Icon as={FaFacebook} sx={{ ...iconStyle }} />
                  </Link>
                  <Link
                    as={RouterNavLink}
                    to="https://www.instagram.com/dario.varga/"
                    target="_blank"
                  >
                    <Icon as={FaInstagram} sx={{ ...iconStyle }} />
                  </Link>
                </HStack>
                <Flex gap={3}>
                  <Button
                    onClick={() => changeLanguage("en")}
                    fontWeight={language === "en" ? "bold" : "400"}
                    bg={
                      colorMode === "dark"
                        ? "backgroundColor.light"
                        : "backgroundColor.dark"
                    }
                    _hover={{ bg: hoverBg }}
                  >
                    ENG
                  </Button>
                  <Divider orientation="vertical" />
                  <Button
                    onClick={() => changeLanguage("cro")}
                    fontWeight={language === "cro" ? "bold" : "400"}
                    bg={
                      colorMode === "dark"
                        ? "backgroundColor.light"
                        : "backgroundColor.dark"
                    }
                    _hover={{ bg: hoverBg }}
                  >
                    HRV
                  </Button>
                </Flex>
                <VStack>
                  <Icon as={colorMode === "light" ? SunIcon : MoonIcon} />
                  <Switch
                    isChecked={colorMode === "dark"}
                    onChange={toggleColorMode}
                    size="lg"
                  />
                </VStack>
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
          <Text>{t("sidebar.aboutMe")}</Text>
          <HStack spacing={4}>
            <Link
              as={RouterNavLink}
              to="https://www.linkedin.com/in/dario-varga/"
              target="_blank"
            >
              <Icon as={BsLinkedin} sx={{ ...iconStyle }} />
            </Link>

            <Link
              as={RouterNavLink}
              to="https://github.com/dariovargaos"
              target="_blank"
            >
              <Icon as={FaGithub} sx={{ ...iconStyle }} />
            </Link>
            <Link
              as={RouterNavLink}
              to="https://www.facebook.com/dario.varga.1/"
              target="_blank"
            >
              <Icon as={FaFacebook} sx={{ ...iconStyle }} />
            </Link>
            <Link
              as={RouterNavLink}
              to="https://www.instagram.com/dario.varga/"
              target="_blank"
            >
              <Icon as={FaInstagram} sx={{ ...iconStyle }} />
            </Link>
          </HStack>

          <Link as={RouterNavLink} to="/" sx={{ ...linkStyle }}>
            <Flex align="center">
              <Icon as={FaUser} mr={2} />
              {t("sidebar.pages.aboutMe")}
            </Flex>
          </Link>

          <Link as={RouterNavLink} to="/portfolio" sx={{ ...linkStyle }}>
            <Flex align="center">
              <Icon as={FaLaptopCode} mr={2} />
              {t("sidebar.pages.portfolio")}
            </Flex>
          </Link>
          <Link as={RouterNavLink} to="/resume" sx={{ ...linkStyle }}>
            <Flex align="center">
              <Icon as={IoDocumentText} mr={2} />
              {t("sidebar.pages.resume")}
            </Flex>
          </Link>
          <Link as={RouterNavLink} to="/contact" sx={{ ...linkStyle }}>
            <Flex align="center">
              <Icon as={IoMail} mr={2} />
              {t("sidebar.pages.contact")}
            </Flex>
          </Link>
          <VStack>
            <Icon as={colorMode === "light" ? SunIcon : MoonIcon} />
            <Switch
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
              size="lg"
            />
          </VStack>
        </>
      )}
    </Flex>
  );
}
