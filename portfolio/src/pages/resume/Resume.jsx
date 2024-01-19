import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
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
} from "@chakra-ui/react";

//icons
import { FaFilePdf } from "react-icons/fa6";

export default function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("global");
  const { language } = useLanguage();
  const { colorMode } = useColorMode();

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
          href={
            language === "en"
              ? "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/CV%20English%20-%20Dario%20Varga.pdf?alt=media&token=55409ee4-001e-4dfc-800e-69f9bf9d9849"
              : "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/CV%20-%20Dario%20Varga.pdf?alt=media&token=378db68f-ce12-49f7-8356-64923c0e86e3"
          }
          download="Varga_Dario_CV"
          target="blank"
        >
          {t("resume.button")}
        </Button>
      </Flex>

      <Flex p={8}>
        <Flex boxShadow="md" justify="center">
          <Image
            w={isSmallScreen ? "100%" : "60%"}
            src={
              language === "en"
                ? "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/Professional%20CV%20Resume%20image.png?alt=media&token=5e804952-eb5e-46a5-b9b7-20f7a08ea8d2"
                : "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/Professional%20CV%20Resume%20image.png?alt=media&token=791b14d6-ed49-44f7-8f17-d6a6d14df244"
            }
            onClick={isMobile ? () => setIsOpen(true) : () => setIsOpen(false)}
          />
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={toggleModal} isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalCloseButton />
          <ModalBody p={3}>
            <Image
              src={
                language === "en"
                  ? "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/Professional%20CV%20Resume%20image.png?alt=media&token=5e804952-eb5e-46a5-b9b7-20f7a08ea8d2"
                  : "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/Professional%20CV%20Resume%20Croatian%20image.png?alt=media&token=6481d6c0-822a-4823-97e7-cfbbe7c1a42e"
              }
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
