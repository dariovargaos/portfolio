import { useParams, useNavigate } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
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
} from "@chakra-ui/react";

//icons
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Project() {
  const { projectId } = useParams();
  const { document: project, error } = useDocument("projects", projectId);
  const navigate = useNavigate();
  return (
    <Flex flexDir="column" minH="100vh" justify="center" gap={5}>
      <Flex p={4}>
        <Button
          onClick={() => navigate("/portfolio")}
          leftIcon={<FaArrowAltCircleLeft />}
        >
          Portfolio
        </Button>
      </Flex>
      <Box>
        <Flex p={4} bg="#FAFAFA" justify="space-evenly" align="center" gap={5}>
          <Image src={project?.image} w="40%" />

          <Flex flexDir="column" gap={5}>
            <Heading size="lg">{project?.name}</Heading>
            <Text>
              Live demo:{" "}
              <Link href={project?.website} isExternal color="#38A169">
                {project?.website}
              </Link>
            </Text>
            <Text>
              Github repo:{" "}
              <Link href={project?.github} isExternal color="#38A169">
                {project?.github}
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
