import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export default function Project() {
  const { projectId } = useParams();
  const { document: project, error } = useDocument("projects", projectId);
  return (
    <Flex minH="100vh" align="center">
      {/* <Flex
        flexDir="column"
        justify="center"
        align="center"
        gap={5}
        bg="#FAFAFA"
        minH="200px"
      >
        <Heading color="black">{project?.name}</Heading>
        <Text color="gray.500" fontWeight="300">
          {project?.description}
        </Text>
      </Flex> */}

      <Box>
        <Flex p={4} bg="#FAFAFA" justify="space-evenly" align="center" gap={5}>
          <Image src={project?.image} w="40%" />

          <Flex flexDir="column" gap={5}>
            <Heading size="lg">{project?.name}</Heading>
            <Text>
              Website:{" "}
              <Link href={project?.website} isExternal color="#38A169">
                {project?.website}
              </Link>
            </Text>
            <Text>Description: {project?.description}</Text>
            <Text>
              Technologies used:
              <UnorderedList p={3}>
                {project?.technologies.map((technology, index) => (
                  <ListItem key={index}>{technology}</ListItem>
                ))}
              </UnorderedList>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
