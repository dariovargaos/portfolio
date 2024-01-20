import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Progress,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

export default function AboutMe() {
  const { data: projects, isLoading, isError, error } = useFirestore();
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const { language } = useLanguage();
  const { colorMode } = useColorMode();

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
        bg={colorMode === "dark" ? "#1A202C" : "#FAFAFA"}
        minH="200px"
        p={isSmallScreen ? 3 : 0}
        borderBottom={colorMode === "dark" ? "1px solid gray" : ""}
      >
        <Heading fontWeight="bold">{t("portfolio.title")}</Heading>
        <Text>{t("portfolio.description")}</Text>
      </Flex>

      {isLoading ? (
        <Progress colorScheme="green" isIndeterminate />
      ) : (
        <Flex flexDir="column" p={8} gap={4}>
          <Flex gap={5}>
            <Box borderLeft="5px solid #54B689"></Box>
            <Heading size="lg">{t("portfolio.subtitle")}</Heading>
          </Flex>

          {isError ? (
            <Text>{error.message}</Text>
          ) : (
            <SimpleGrid minChildWidth="300px" spacing="40px">
              {projects &&
                projects.map((project) => (
                  <Card
                    key={project.id}
                    direction="column"
                    _hover={{ cursor: "pointer" }}
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    {isLoading ? (
                      <Spinner color="#38A169" size="xl" />
                    ) : (
                      <Image src={project.image} w="100%" />
                    )}

                    <Stack>
                      <CardBody>
                        <Heading size="md">{project.name}</Heading>

                        <Text py={2}>
                          {language === "en"
                            ? project.description.substring(0, 100)
                            : project.description_cro.substring(0, 100)}
                          ...
                        </Text>
                      </CardBody>
                    </Stack>
                  </Card>
                ))}
            </SimpleGrid>
          )}
        </Flex>
      )}
    </Box>
  );
}
