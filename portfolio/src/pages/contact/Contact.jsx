import { useState } from "react";
import emailjs from "@emailjs/browser";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

//icons
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    //services
    const serviceId = "service_hkgfh5a";
    const templateId = "template_ta9ndg7";
    const publicKey = "Ds8SCaR_UxmcaeFeP";

    //create object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Dario",
      message: message,
      reply_to: email,
    };

    //send the email
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully: ", response);
        setName("");
        setEmail("");
        setMessage("");
        toast({
          title: "Message is sent.",
          description: "Thank you for reaching out!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        toast({
          title: "Something went wrong.",
          description: "Please try again!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

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
          can fill in the contact form below or send me an email to{" "}
          <Link color="#38A169" href="mailto:dario.varga2012@gmail.com">
            dario.varga2012@gmail.com
          </Link>
        </Text>
        <Text>
          Want to get connected? Follow me on the social channels below.
        </Text>
        <Flex gap={5}>
          <Link
            as={RouterNavLink}
            to="https://www.linkedin.com/in/dario-varga/"
            target="_blank"
          >
            <Icon as={FaLinkedin} boxSize={7} color="#38A169" />
          </Link>

          <Link
            as={RouterNavLink}
            to="https://github.com/dariovargaos"
            target="_blank"
          >
            <Icon as={FaGithub} boxSize={7} color="#38A169" />
          </Link>
          <Link
            as={RouterNavLink}
            to="https://www.facebook.com/dario.varga.1/"
            target="_blank"
          >
            <Icon as={FaFacebook} boxSize={7} color="#38A169" />
          </Link>
          <Link
            as={RouterNavLink}
            to="https://www.instagram.com/dario.varga/"
            target="_blank"
          >
            <Icon as={FaInstagram} boxSize={7} color="#38A169" />
          </Link>
        </Flex>
      </Flex>

      <Flex flexDir="column" p={8} gap={5} w="100%" align="center">
        <Heading>Get in Touch</Heading>

        <form onSubmit={handleSubmit} style={{ width: "60%" }}>
          <Flex justify="center" gap={5}>
            <FormControl>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
              />
            </FormControl>
            <FormControl>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
            </FormControl>
          </Flex>
          <Flex justify="center" mt={3}>
            <FormControl>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your Message"
                rows="10"
              />
            </FormControl>
          </Flex>
          <Button type="submit" mt={3}>
            Send Now
          </Button>
        </form>
      </Flex>
    </Box>
  );
}
