import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  useColorMode,
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

  const { t } = useTranslation("global");

  const { colorMode } = useColorMode();

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
          title: t("contact.toast_success_title"),
          description: t("contact.toast_success_description"),
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        toast({
          title: t("contact.toast_error_title"),
          description: t("contact.toast_error_description"),
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
        bg={colorMode === "dark" ? "#1A202C" : "#FAFAFA"}
        minH="200px"
        p={isSmallScreen ? 3 : 0}
        borderBottom={colorMode === "dark" ? "1px solid gray" : ""}
      >
        <Heading fontWeight="bold">{t("contact.title")}</Heading>
        <Text textAlign={isSmallScreen ? "center" : ""}>
          {t("contact.text1")}{" "}
          <Link color="#38A169" href="mailto:dario.varga2012@gmail.com">
            dario.varga2012@gmail.com
          </Link>
        </Text>
        <Text>{t("contact.text2")}</Text>
        <Flex gap={5}>
          <Link
            as={RouterNavLink}
            to="https://www.linkedin.com/in/dario-varga/"
            target="_blank"
          >
            <Icon
              as={FaLinkedin}
              boxSize={7}
              color="#38A169"
              _hover={{ color: "#2E8B57" }}
            />
          </Link>

          <Link
            as={RouterNavLink}
            to="https://github.com/dariovargaos"
            target="_blank"
          >
            <Icon
              as={FaGithub}
              boxSize={7}
              color="#38A169"
              _hover={{ color: "#2E8B57" }}
            />
          </Link>
          <Link
            as={RouterNavLink}
            to="https://www.facebook.com/dario.varga.1/"
            target="_blank"
          >
            <Icon
              as={FaFacebook}
              boxSize={7}
              color="#38A169"
              _hover={{ color: "#2E8B57" }}
            />
          </Link>
          <Link
            as={RouterNavLink}
            to="https://www.instagram.com/dario.varga/"
            target="_blank"
          >
            <Icon
              as={FaInstagram}
              boxSize={7}
              color="#38A169"
              _hover={{ color: "#2E8B57" }}
            />
          </Link>
        </Flex>
      </Flex>

      <Flex flexDir="column" p={8} gap={5}>
        <Heading alignSelf="center">{t("contact.form_title")}</Heading>

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
                {...register("name", {
                  required: {
                    value: true,
                    message: t("contact.form_name_error"),
                  },
                })}
                placeholder={t("contact.form_name")}
                type="text"
              />
              {errors.name && <Text color="red">{errors.name.message}</Text>}
            </FormControl>
            <FormControl>
              <Input
                {...register("email", {
                  required: {
                    value: true,
                    message: t("contact.form_email_error"),
                  },
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
                  required: {
                    value: true,
                    message: t("contact.form_message_error"),
                  },
                })}
                placeholder={t("contact.form_message")}
                type="text"
                rows="10"
              />
              {errors.message && (
                <Text color="red">{errors.message.message}</Text>
              )}
            </FormControl>
            <Button type="submit" alignSelf="flex-start">
              {t("contact.form_button")}
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
}
