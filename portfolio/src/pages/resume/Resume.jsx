import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { useStorage } from "../../hooks/useStorage";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  useBreakpointValue,
  useColorMode,
  Progress,
} from "@chakra-ui/react";

//icons
import { FaFilePdf } from "react-icons/fa6";

export default function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("global");
  const { language } = useLanguage();
  const { colorMode } = useColorMode();
  const { data, isLoading, isError, error } = useStorage();
  console.log(data);

  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });

  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        gap={5}
        bg={colorMode === "dark" ? "#1A202C" : "#FAFAFA"}
        minH="200px"
        borderBottom={colorMode === "dark" ? "1px solid gray" : ""}
      >
        <Heading fontWeight="bold">{t("resume.title")}</Heading>
        <Text>{t("resume.subtitle")}</Text>
        <Button
          leftIcon={<FaFilePdf />}
          as="a"
          href={data && language === "en" ? data?.[3].src : data?.[2].src}
          download="Varga_Dario_CV"
          target="blank"
        >
          {t("resume.button")}
        </Button>
      </Flex>

      <Flex p={8}>
        <Flex boxShadow="md" justify="center">
          {isLoading ? (
            <Progress colorScheme="green" isIndeterminate />
          ) : (
            <Image
              w={isSmallScreen ? "100%" : "60%"}
              src={language === "en" ? data?.[0].src : data?.[1].src}
              onClick={
                isMobile ? () => setIsOpen(true) : () => setIsOpen(false)
              }
              loading="lazy"
            />
          )}
          {isError && <Text>{error.message}</Text>}
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={toggleModal} isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalCloseButton />
          <ModalBody p={3}>
            <Image src={language === "en" ? data?.[0].src : data?.[1].src} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
