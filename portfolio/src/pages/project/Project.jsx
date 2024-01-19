import { useParams, useNavigate } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

//icons
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Project() {
  const { projectId } = useParams();
  const {
    data: project,
    isLoading,
    error,
  } = useDocument("projects", projectId);

  const { t } = useTranslation("global");

  const { language } = useLanguage();

  const navigate = useNavigate();

  const { colorMode } = useColorMode();

  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <p>Error: {error.message}</p>;
  }
  return (
    <Flex flexDir="column" minH="100vh" justify="center" gap={5}>
      <Box p={4}>
        <Button
          onClick={() => navigate("/portfolio")}
          leftIcon={<FaArrowAltCircleLeft />}
        >
          {t("portfolio.title")}
        </Button>
      </Box>
      <Box>
        <Flex
          flexDir={isSmallScreen ? "column" : "row"}
          p={4}
          bg={colorMode === "dark" ? "#1E2A3A" : "#FAFAFA"}
          justify="space-evenly"
          align="center"
          gap={5}
          borderLeft={colorMode === "dark" ? "1px solid gray" : ""}
        >
          <Image src={project?.image} w={isSmallScreen ? "100%" : "40%"} />

          <Flex flexDir="column" gap={5}>
            <Heading size="lg">{project?.name}</Heading>
            <Text>
              {t("project.demo")}:{" "}
              <Link href={project?.website} isExternal color="#38A169">
                {project?.website}
              </Link>
            </Text>
            <Text>
              {t("project.github")}:{" "}
              <Link href={project?.github} isExternal color="#38A169">
                {project?.github}
              </Link>
            </Text>
            <Text>
              {t("project.description")}:{" "}
              {language === "en"
                ? project?.description
                : project?.description_cro}
            </Text>
            <Text>{t("project.technologies")}:</Text>
            <UnorderedList p={2}>
              {project?.technologies.map((technology, index) => (
                <ListItem key={index}>{technology}</ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
