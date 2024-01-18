import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

//icons
import { IoDocumentText, IoLogoJavascript } from "react-icons/io5";
import {
  FaArrowAltCircleRight,
  FaHtml5,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiMantine } from "react-icons/si";

export default function AboutMe() {
  const { data: projects, isLoading, error } = useFirestore();
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const { language } = useLanguage();

  const featuredProjects = projects?.filter(
    (project) => project.featured === true
  );

  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <Box>
      <Flex align="center" gap={5} bg="#FAFAFA" minH="300px" p={8}>
        <Flex flexDir="column" gap={3}>
          <Heading color="black" fontWeight="bold">
            Dario Varga
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Junior Frontend Developer
          </Text>
          <Text>{t("aboutMe.aboutMe")}</Text>
          <ButtonGroup>
            <Button
              leftIcon={<FaArrowAltCircleRight />}
              onClick={() => navigate("/portfolio")}
            >
              {t("aboutMe.buttons.portfolio")}
            </Button>
            <Button
              leftIcon={<IoDocumentText />}
              onClick={() => navigate("/resume")}
              bg="#4F4F4F"
              _hover={{ bg: "#373737" }}
            >
              {t("aboutMe.buttons.resume")}
            </Button>
          </ButtonGroup>
        </Flex>
        {!isSmallScreen && (
          <Box>
            <Image
              w="250px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
        )}
      </Flex>

      <Flex flexDir="column" p={8} gap={4}>
        <Flex gap={5}>
          <Box borderLeft="5px solid #54B689"></Box>
          <Heading size="lg">{t("aboutMe.whatIDo.title")}</Heading>
        </Flex>
        <Text>{t("aboutMe.whatIDo.description")}</Text>
        <Flex
          justify={isSmallScreen ? "" : "space-evenly"}
          flexWrap={isSmallScreen ? "wrap" : ""}
          gap={isSmallScreen ? 4 : 0}
        >
          <Flex flexDir="column" align="center">
            <HStack>
              <Icon as={FaHtml5} boxSize={7} color="#FC490B" />
              <Icon as={IoLogoCss3} boxSize={7} color="#2196F3" />
            </HStack>

            <Text>HTML & CSS</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Icon as={IoLogoJavascript} boxSize={7} color="#FFDF00" />
            <Text>JavaScript</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Icon as={BiLogoTypescript} boxSize={7} color="#3178C6" />
            <Text>TypeScript</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Icon as={FaReact} boxSize={7} color="#15DCDC" />
            <Text>React</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Image
              src="https://ryannaing.com/assets/images/skills/chakra.png"
              w={7}
            />
            <Text>ChakraUI</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Icon as={SiMantine} boxSize={7} color="#339AF0" />
            <Text>Mantine</Text>
          </Flex>
          <Flex flexDir="column" align="center" gap={1}>
            <Image
              src="https://logowik.com/content/uploads/images/firebase.jpg"
              w={8}
            />
            <Text>Firebase</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Icon as={AiOutlineConsoleSql} boxSize={7} color="black" />
            <Text>SQL</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Icon as={FaGitAlt} boxSize={7} color="#E84D31" />
            <Text>git</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDir="column" p={8} gap={5}>
        <Flex gap={5}>
          <Box borderLeft="5px solid #54B689"></Box>
          <Heading size="lg">{t("aboutMe.featured")}</Heading>
        </Flex>
        <SimpleGrid
          minChildWidth={isSmallScreen ? "250px" : "150px"}
          spacing="40px"
        >
          {featuredProjects?.map((project) => (
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
        <Flex justify="center">
          <Button
            leftIcon={<FaArrowAltCircleRight />}
            onClick={() => navigate("/portfolio")}
          >
            {t("aboutMe.buttons.portfolio")}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
