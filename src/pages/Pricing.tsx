import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const PricingPage = () => {
  return (
    <>
      {/* Header */}
      <Box pb={"112px"} as="section">
        <Box
          as="section"
          color={"#f7fafc"}
          bg={"#6b46c1"}
          pt={"90px"}
          pb={"198px"}
          px={"32px"}
          textAlign={"center"}
        >
          <Heading fontWeight={"800"} fontSize={"48px"}>
            Simple Pricing for your business
          </Heading>
          <Text fontWeight={"500"} fontSize={"24px"} pt={"16px"}>
            Plans that are carefully crafted to suit your business.
          </Text>
        </Box>
      </Box>

      {/* Pricing Card */}
      <Box
        maxW={"994px"}
        mx={"auto"}
        mt={"-256px"}
        bg={"#fff"}
        rounded={"12px"}
        overflow={"hidden"}
        boxShadow={
          "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
      >
        <Flex>
          <Box bg={"#f0eafb"} p={"60px"} flex={"none"}>
            <Text fontSize={"24px"} fontWeight={"800"}>
              Premium PRO
            </Text>
            <Heading as={"h3"} fontSize={"60px"} mt={"16px"}>
              $329
            </Heading>
            <Text
              color={"#171923"}
              fontSize={"18px"}
              fontWeight={"500"}
              mt={"8px"}
            >
              billed just once
            </Text>
            <Button colorScheme="purple" size={"lg"} mt={"24px"}>
              Get Started
            </Button>
          </Box>
          <Box p={"60px"} fontSize={"18px"}>
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as={"ul"} spacing={"20px"} pt={"24px"}>
              <HStack as={"li"} spacing={"20px"}>
                <FaCheckCircle
                  width={"24px"}
                  height={"24px"}
                  color={"#6b46c1"}
                />
                <Text>International calling and messaging API</Text>
              </HStack>
              <HStack as={"li"} spacing={"20px"}>
                <FaCheckCircle
                  width={"24px"}
                  height={"24px"}
                  color={"#6b46c1"}
                />
                <Text>International calling and messaging API</Text>
              </HStack>
              <HStack as={"li"} spacing={"20px"}>
                <FaCheckCircle
                  width={"24px"}
                  height={"24px"}
                  color={"#6b46c1"}
                />
                <Text>International calling and messaging API</Text>
              </HStack>
              <HStack as={"li"} spacing={"20px"}>
                <FaCheckCircle
                  width={"24px"}
                  height={"24px"}
                  color={"#6b46c1"}
                />
                <Text>International calling and messaging API</Text>
              </HStack>
              <HStack as={"li"} spacing={"20px"}>
                <FaCheckCircle
                  width={"24px"}
                  height={"24px"}
                  color={"#6b46c1"}
                />
                <Text>International calling and messaging API</Text>
              </HStack>
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* Features */}
      <Box as="section" maxW={"1024px"} mx={"auto"} pt={"60px"} pb={"32px"}>
        <HStack justify={"space-between"} px={"48px"}>
          <HStack spacing={"24px"}>
            <BsStars size={"48px"} color={"#6b46c1"} />
            <Text fontSize={"18px"} fontWeight={"700"}>
              Rated 5 Stars in Reviews
            </Text>
          </HStack>
          <HStack spacing={"24px"}>
            <BsStars size={"48px"} color={"#6b46c1"} />
            <Text fontSize={"18px"} fontWeight={"700"}>
              Rated 5 Stars in Reviews
            </Text>
          </HStack>
          <HStack spacing={"24px"}>
            <BsStars size={"48px"} color={"#6b46c1"} />
            <Text fontSize={"18px"} fontWeight={"700"}>
              Rated 5 Stars in Reviews
            </Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default PricingPage;
