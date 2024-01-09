import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

//icons
import { FaFilePdf } from "react-icons/fa6";

export default function AboutMe() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const cvURL =
    "https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/CV%20English%20-%20Dario%20Varga.pdf?alt=media&token=8c86e3ce-4c0f-4335-8762-ba122b1bc68d";
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
          Online Resume
        </Heading>
        <Button
          leftIcon={<FaFilePdf />}
          as="a"
          href={cvURL}
          download="Dario_Varga_CV.pdf"
        >
          Download PDF Version
        </Button>
      </Flex>

      <Flex p={8} gap={4}>
        <Flex boxShadow="md" justify="center">
          <Image
            w="70%"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-ad943.appspot.com/o/Professional%20CV%20Resume%20image.png?alt=media&token=5e804952-eb5e-46a5-b9b7-20f7a08ea8d2"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
