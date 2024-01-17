import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

//icons
import { FaLocationArrow } from "react-icons/fa6";

export default function AboutMe() {
  const { data: projects, isLoading, error } = useFirestore();
  const navigate = useNavigate();
  const { t } = useTranslation("global");

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
        p={isSmallScreen ? 3 : 0}
      >
        <Heading fontWeight="bold">{t("portfolio.title")}</Heading>
        <Text>{t("portfolio.description")}</Text>
      </Flex>

      <Flex flexDir="column" p={8} gap={4}>
        <Flex gap={5}>
          <Box borderLeft="5px solid #54B689"></Box>
          <Heading size="lg">{t("portfolio.subtitle")}</Heading>
        </Flex>

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
                  <Spinner color="#38A169" />
                ) : (
                  <Image src={project.image} w="100%" />
                )}

                <Stack>
                  <CardBody>
                    <Heading size="md">{project.name}</Heading>

                    <Text py="2">
                      {project.description.substring(0, 100)}...
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
