import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

//icons
import { FaFilePdf } from "react-icons/fa6";

export default function AboutMe() {
  const { t } = useTranslation("global");
  const { language } = useLanguage();

  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });
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
          {t("resume.title")}
        </Heading>
        <Button
          leftIcon={<FaFilePdf />}
          as="a"
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/CV%20English%20-%20Dario%20Varga.pdf?alt=media&token=2b5cc7a4-bf38-4171-aa5e-15c04c068f15"
          download="Varga_Dario_CV"
          target="blank"
        >
          {t("resume.button")}
        </Button>
      </Flex>

      <Flex p={8}>
        <Flex boxShadow="md" justify="center">
          <Image
            w={isSmallScreen ? "100%" : "70%"}
            src={
              language === "en"
                ? "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/Professional%20CV%20Resume%20image.png?alt=media&token=5e804952-eb5e-46a5-b9b7-20f7a08ea8d2"
                : "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/Professional%20CV%20Resume%20Croatian%20image.png?alt=media&token=6481d6c0-822a-4823-97e7-cfbbe7c1a42e"
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
}
