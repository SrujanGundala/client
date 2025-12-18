import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import image from "../assets/eLearningLogo.png";

const Header = () => {
  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        // p={4}
        py={2}
        px={4}
        bg="#f5f5f5"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        position="fixed"
        top={0}
        left={0}
        width="100%"
        zIndex={12}
      >
        {/* Logo */}
        <Flex align="center" minW="200px">
          <Box _hover={{ cursor: "pointer" }}>
            <HStack align="center">
              <Image src={image} alt="Logo" boxSize="46px" width="100%" />
              <Text
                fontSize={30}
                fontWeight="extrabold"
                color="#0056d2"
                //   onClick={home}
              >
                SRM
              </Text>
            </HStack>
          </Box>
        </Flex>
        {/* Search Bar */}
        <Flex flex="1" justify="center">
          <HStack
            spacing={0}
            w={{ base: "90%", md: "60%", lg: "50%" }}
            maxW="700px"
            gap="0.5"
          >
            <Input
              type="text"
              variant="filled"
              bg="white"
              border="1px solid #ddd"
              paddingRight="none"
              _focus={{
                borderColor: "#0056d2",
                boxShadow: "0 0 0 1px #0056d2",
              }}
              fontSize="sm"
              color="black"
              placeholder="What do you want to learn?"
              borderRadius="10px 0 0 10px"
              _placeholder={{ color: "#555454", letterSpacing: "0.5px" }}
            />
            <Button
              bg="#0056d2"
              color="white"
              height="42px"
              borderRadius="0 10px 10px 0"
              _hover={{ bg: "#003e9c" }}
              // onClick={signup}
            >
              <FaSearch />
            </Button>
          </HStack>
        </Flex>
        {/* Right-log in an sigh up */}
        <Flex
          align="center"
          gap={4}
          minW={{ base: "200px", md: "260px" }}
          justify="flex-end"
        >
          <Button
            bg="white"
            mr={4}
            variant="outline"
            border="3px solid #0056d2"
            _hover={{ bg: "#f5f5f5", color: "white" }}
          >
            <Link textDecoration="none" color="#0056d2">
              Login
            </Link>
          </Button>
          {/* Join for Free Button */}
          <Button
            bg="#0056d2"
            color="white"
            borderRadius="5px"
            _hover={{ bg: "#003e9c" }}
            // onClick={signup}
          >
            Join for free
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
