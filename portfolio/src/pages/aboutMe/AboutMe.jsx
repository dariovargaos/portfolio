import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box>
      <Flex align="center" gap={5} bg="#FAFAFA" minH="300px" p={8}>
        <Box>
          <Heading color="black" fontWeight="bold">
            Dario Varga
          </Heading>
          <Text>Junior Frontend Developer</Text>
          <Text>
            I'm a frontend developer specialised in React. I built several web
            apps which you can check out on my Github or portfolio.
          </Text>
          <ButtonGroup>
            <Button>View Portfolio</Button>
            <Button>View Resume</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Image
            boxSize="250px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>

      <Flex flexDir="column" p={8} gap={4}>
        <Heading borderLeft="5px solid #54B689">What I do</Heading>
        <Text>
          I'm bachelor graduate at FERIT Osijek and I'm also finished 1 year
          education for Fronend development at University of Algebra. Currently
          looking for job so I can learn and grow in the fronend field. Below is
          a quick overview of my main technical skill sets and technologies I
          use. Want to find out more about my experience? Check out my online
          resume and project portfolio.
        </Text>
        <List>
          <ListItem> Ikonice tehnologija</ListItem>
        </List>
      </Flex>

      <Flex flexDir="column" p={8} gap={4}>
        <Heading borderLeft="5px solid #54B689">Featured Projects</Heading>
        <Text>ovdje ide grid sa slikama i opisom par projekata</Text>
        <List>
          <ListItem> Ikonice tehnologija</ListItem>
        </List>
      </Flex>
    </Box>
  );
}
