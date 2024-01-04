import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function Contact() {
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
          Contact
        </Heading>
        <Text>
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to
          simon.doe@yourwebsite.com
        </Text>
        <Text>
          Want to get connected? Follow me on the social channels below.
        </Text>
        <Text>OVDJE IKONICE OD MREŽA</Text>
      </Flex>

      <Flex flexDir="column" p={8} gap={4}>
        <form>
          <Heading>Get in Touch</Heading>
          <FormControl>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Textarea placeholder="Enter your message" />
            <Button type="submit">Send Now</Button>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
}
