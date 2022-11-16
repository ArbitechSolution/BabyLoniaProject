import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  VStack,
  WrapItem,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Babylonia_Logo from "../../assets/Babylonia_Logo.png";
import { useAppSelector } from "@hooks";
import { useRouter } from "next/router";
import styled from "styled-components";

const HistoryComponent = (props: any) => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("gray.900", "#C5C5C5");
  const bgBuyBtnColor = useColorModeValue("gray.100", "gray.800");
  const bgBuyBtnTextColor = useColorModeValue("gray.900", "gray.200");

  const router = useRouter();

  return (
    <Stack justifyContent="center" alignItems="center">
      <Box
        {...props}
        w={["100vw", "90vw", "340px"]}
        borderRadius="10px"
        whiteSpace="nowrap"
        bg={colorMode === "dark" ? "black" : "white"}
        border={"1px"}
        borderColor={colorMode === "dark" ? "white" : "black"}
        p="10px"
        m={["10px"]}
      >
        <Box
          bg={colorMode === "dark" ? "#5C5C5C" : "#E2E2E2"}
          borderRadius="5px"
          border="1px"
          minH={"450px"}
          paddingX="15px"
          borderColor={colorMode === "dark" ? "black" : "black"}
          paddingBottom="150px"
        >
          <Flex justifyContent="space-evenly" mt="5px">
            <Text
              fontSize={"xl"}
              pl="6px"
              color={colorMode === "dark" ? "#C5C5C5" : ""}
            >
              ALL HISTORY
            </Text>
            <Text
              fontSize={"xl"}
              pl="6px"
              color={colorMode === "dark" ? "#C5C5C5" : ""}
            >
              YOUR HISTORY
            </Text>
          </Flex>
          <Container style={{ background: "#F0B90B" }}>
            <h2>PRIZE POOL</h2>
            <p>
              99,9999000.00 <br /> <span>-$123456.00</span>
            </p>
          </Container>
          <Container style={{ background: "#B49EF2" }}>
            <h2>ROUND</h2>
            <h4>{`<`}</h4>
            <p>123456</p>
            <h4>{`>`}</h4>
            <h3>first</h3>
            <h3>last</h3>
          </Container>
          <Container style={{ background: "#37A93B" }}>
            <h2>LAST WINNER</h2>
            <p>1234356</p>
          </Container>
        </Box>
      </Box>
    </Stack>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding: 10px;
  min-height: 55px;

  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  h2 {
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;

    color: #000000;
  }
  h3 {
    padding: 5px;
  }
  h4 {
    font-size: 20px;
  }
  p {
    background: #ffffff;
    border: 1px solid #f0b90b;
    border-radius: 5px;
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #000000;
    padding: 8px;
    max-height: 55px;
    margin-left: 5px;
    span {
      font-size: 16px;
      margin: 0;
      padding: 0;
      position: relative;
      top: -5px;
    }
  }
`;

export default HistoryComponent;
