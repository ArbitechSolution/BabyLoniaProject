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

const PrizePool = (props: any) => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("gray.900", "#C5C5C5");
  const bgBuyBtnColor = useColorModeValue("gray.100", "gray.800");
  const bgBuyBtnTextColor = useColorModeValue("gray.900", "gray.200");

  const router = useRouter();

  return (
    <Stack justifyContent="center" alignItems="center" mb={"100px"}>
      <Box
        {...props}
        w={["100vw", "90vw", "220px"]}
        borderRadius="10px"
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
          paddingX="15px"
          borderColor={colorMode === "dark" ? "black" : "black"}
          minHeight="250px"
        >
          <Text
            fontSize={"lg"}
            pl="6px"
            mt="5px"
            color={colorMode === "dark" ? "#C5C5C5" : ""}
          >
            PRIZE POOL
          </Text>
          <Container>
            <h3>DIGITS MATCHED</h3>

            <div className="group">
              <p>Matches first 1: 7.5 %</p>
              <p>Matches first 2: 10 % </p>
              <p>Matches first 3: 12.5 % </p>
              <p>Matches first 4: 15 %</p>
              <p>Matches first 5: 20 %</p>
              <p>Matches all 6: 25 %</p>
            </div>
            <div className="group">
              <p>Promotions & Marketing: 5% </p>
              <p>Buyback: 5%</p>
            </div>
          </Container>
        </Box>
      </Box>
    </Stack>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
  font-family: "Ropa Sans";
  div {
    margin: 5px 0;
    p {
      font-family: "Ropa Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 19px;
      color: #000000;
    }
  }
`;

export default PrizePool;
