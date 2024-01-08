import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function AboutMe() {
  const { projects } = useFirestore();
  const navigate = useNavigate();
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
        <Heading fontWeight="bold">Portfolio</Heading>
        <Text>
          Welcome to my online portfolio. Want some help building your software?
        </Text>
        <Button>Hire me</Button>
      </Flex>

      <Flex flexDir="column" p={8} gap={4}>
        <Flex gap={5}>
          <Box borderLeft="5px solid #54B689"></Box>
          <Heading size="lg">My Projects</Heading>
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
                <Image src={project.image} w="100%" />

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
