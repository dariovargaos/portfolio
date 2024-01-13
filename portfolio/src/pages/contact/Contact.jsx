import { useForm } from "react-hook-form";
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
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";

//icons
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toast = useToast();

  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });

  const onSubmit = (data) => {
    //services
    const serviceId = "service_hkgfh5a";
    const templateId = "template_ta9ndg7";
    const publicKey = "Ds8SCaR_UxmcaeFeP";

    //create object that contains dynamic template params
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Dario",
      message: data.message,
      reply_to: data.email,
    };

    //send the email
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully: ", response);
        reset();
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
        p={isSmallScreen ? 3 : 0}
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

      <Flex flexDir="column" p={8} gap={5}>
        <Heading alignSelf="center">Get in Touch</Heading>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Flex
            flexDir={isSmallScreen ? "column" : "row"}
            gap={5}
            w={isSmallScreen ? "100%" : "70%"}
            alignSelf="center"
          >
            <FormControl justifySelf="center">
              <Input
                {...register("name", { required: "Name is required." })}
                placeholder="Name"
                type="text"
              />
              {errors.name && <Text color="red">{errors.name.message}</Text>}
            </FormControl>
            <FormControl>
              <Input
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
                type="email"
              />
              {errors.email && <Text color="red">{errors.email.message}</Text>}
            </FormControl>
          </Flex>
          <Flex
            flexDir="column"
            gap={3}
            w={isSmallScreen ? "100%" : "70%"}
            alignSelf="center"
          >
            <FormControl>
              <Textarea
                {...register("message", {
                  required: "Message is required.",
                })}
                placeholder="Enter your Message"
                type="text"
                rows="10"
              />
              {errors.message && (
                <Text color="red">{errors.message.message}</Text>
              )}
            </FormControl>
            <Button type="submit" alignSelf="flex-start">
              Send Now
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
}
